import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { v4 as uuid } from 'uuid'

import snabbdom from "snabbdom";
import axios from "axios";

import { createVirtualDom, createElement } from "../utils/virtualDom";
const toVNode = require("snabbdom/tovnode").default;

const options = {
	childList: true, // 是否观察子节点的变动
	subtree: true, // 是否观察所有后代节点的变动
	attributes: true, // 是否观察属性的变动
	attributeOldValue: true, // 是否观察属性的变动的旧值
	characterData: true, // 是否节点内容或节点文本的变动
	characterDataOldValue: true, // 是否节点内容或节点文本的变动的旧值
	// attributeFilter: ['class', 'src'] 不在此数组中的属性变化时将被忽略
};

const records = [];

const onMutationChange = (mutationsList) => {
    const getFlowId = (node) => {
        if (node) {
            // 新插入的DOM没有标记，所以这里需要兼容
            if (!node.__flow) node.__flow = { id: uuid() };
            return node.__flow.id;
        }
    };
    mutationsList.forEach((mutation) => {
        const { target, type, attributeName } = mutation;
        const record = {
            type,
            target: getFlowId(target),
        };
        switch (type) {
            case "characterData":
                record.value = target.nodeValue;
                break;
            case "attributes":
                record.attributeName = attributeName;
                record.attributeValue = target.getAttribute(attributeName);
                break;
            case "childList":
                record.removedNodes = [...mutation.removedNodes].map((n) =>
                    getFlowId(n)
                );
                record.addedNodes = [...mutation.addedNodes].map((n) => {
                    const snapshot = takeSnapshot(n);
                    return {
                        ...snapshot,
                        nextSibling: getFlowId(n.nextSibling),
                        previousSibling: getFlowId(n.previousSibling),
                    };
                });
                break;
        }
        records.push(record);
    });
};

function takeSnapshot(node, options = {}) {
	markNodes(node);
	const snapshot = {
		content: createVirtualDom(node),
	};
	if (options.doctype === true) {
		snapshot.doctype = document.doctype.name;
		snapshot.clientWidth = document.body.clientWidth;
		snapshot.clientHeight = document.body.clientHeight;
	}
	return snapshot;
}

function markNodes(node){
    if (node) {
        node.__flow = { id: uuid() };
    }
    return node;
}

function useScreenShot() {

	useEffect(() => {
		const wapper = document.documentElement;

		html2canvas(document.body).then(function (canvas) {
			// document.body.appendChild(canvas);
		});

        const socket = new WebSocket(`ws://${location.host}/ws/chat`);
        
		socket.onopen = () => {
			console.log("websocket open!");
		};

        const observer = new MutationObserver(onMutationChange);
        
        observer.observe(wapper, options);
        
        window.addEventListener('error', function(event) {
            // const content = createVirtualDom(wapper);
            console.log(records);
            // debugger
			socket.send(
				JSON.stringify({
                    // container: document.body,
                    snapshot: takeSnapshot(wapper, {doctype: true}),
					records: records,
				})
			);
			// console.log(createElement(content));
			axios.post("/ajax/pageContent", {
                screen: { width: 375, height: 667 },
                // content: content,
            }).then(function (data) {
                console.log(data);
            });
        })

    }, []);
    
    return;
}

export default useScreenShot;


