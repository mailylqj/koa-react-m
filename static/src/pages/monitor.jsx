import React from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import parse from 'html-react-parser';
import { createElement } from '../utils/virtualDom';
const {useState, useCallback, useEffect, useMemo, useRef} = React;
const Monitor = () => {
    // const [wapHtml, setWapHtml] = useState('')
    const [size, setSize] = useState({width: '100%', height: '100%'})
    const wapRef = useRef(null);
    let records1 = [];

    const execRecords = (preDuration = 0) => {
        const record = records1.shift();
        let node;
        if (record) {
            setTimeout(() => {
                switch (record.type) {
                    // 'childList'、'characterData'、
                    // 'attributes'、'input'、'checked'、
                    // 'focus'、'blur'、'play''pause'等事件的处理
                }
                execRecords(record.duration);
            }, record.duration - preDuration)
        }
    }

    useEffect(() => {
        const socket = new WebSocket(`ws://${location.host}/ws/chat`);
        const iframe = wapRef.current;
        const doc = iframe.contentDocument;

        socket.onmessage = (msg) => {
            const {snapshot: { doctype, clientHeight, clientWidth, content}, records} = JSON.parse(msg.data);
            records1 = records;
            // setWapHtml(content ? createElement(content) : '');
            setSize({width: clientWidth, height: clientHeight});
            doc.open();
            doc.write(`<!doctype ${doctype}><html><head></head><body></body></html>`);
            doc.close();
            doc.replaceChild(createElement(content), doc.documentElement);
            // execRecords()
        }

    }, [])

    return (
        <>
            <iframe ref={wapRef} style={{width: size.width, height: size.height}}/>
        </>
    )
}

export default Monitor;