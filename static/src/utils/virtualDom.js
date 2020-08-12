const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const XML_NAMESPACES = ["xmlns", "xmlns:svg", "xmlns:xlink"];

function createVirtualDom(element, isSVG = false) {
	switch (element.nodeType) {
		case Node.TEXT_NODE:
			return createVirtualText(element);
		case Node.ELEMENT_NODE:
			return createVirtualElement(
				element,
				isSVG || element.tagName.toLowerCase() === "svg"
			);
		default:
			return null;
	}
}

function createVirtualText(element) {
	const vText = {
		text: element.nodeValue,
		type: "VirtualText",
	};
	if (typeof element.__flow !== "undefined") {
		vText.__flow = element.__flow;
	}
	return vText;
}

function createVirtualElement(element, isSVG = false) {
	const tagName = element.tagName.toLowerCase();
	const children = getNodeChildren(element, isSVG);
	const { attr, namespace } = getNodeAttributes(element, isSVG);
	const vElement = {
		tagName,
		type: "VirtualElement",
		children,
		attributes: attr,
		namespace,
	};
	if (typeof element.__flow !== "undefined") {
		vElement.__flow = element.__flow;
	}
	return vElement;
}

function getNodeChildren(element, isSVG = false) {
	const childNodes = element.childNodes ? [...element.childNodes] : [];
	const children = [];
	childNodes.forEach((cnode) => {
		children.push(createVirtualDom(cnode, isSVG));
	});
	return children.filter((c) => !!c);
}

function getNodeAttributes(element, isSVG = false) {
	const attributes = element.attributes ? [...element.attributes] : [];
	const attr = {};
	let namespace;
	attributes.forEach(({ nodeName, nodeValue }) => {
		attr[nodeName] = nodeValue;
		if (XML_NAMESPACES.includes(nodeName)) {
			namespace = nodeValue;
		} else if (isSVG) {
			namespace = SVG_NAMESPACE;
		}
	});
	return { attr, namespace };
}

function createElement(vdom, nodeFilter = () => true) {
	let node;
	if (vdom.type === "VirtualText") {
		node = document.createTextNode(vdom.text);
	} else {
		node =
			typeof vdom.namespace === "undefined"
				? document.createElement(vdom.tagName)
				: document.createElementNS(vdom.namespace, vdom.tagName);
		for (let name in vdom.attributes) {
			node.setAttribute(name, vdom.attributes[name]);
		}
		vdom.children.forEach((cnode) => {
			const childNode = createElement(cnode, nodeFilter);
			if (childNode && nodeFilter(childNode)) {
				node.appendChild(childNode);
			}
		});
	}
	if (vdom.__flow) {
		node.__flow = vdom.__flow;
	}
	return node;
}

export { createVirtualDom , createElement };
