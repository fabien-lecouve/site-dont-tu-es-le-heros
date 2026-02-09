export function element(tag, attrs = {}, html = "") {
    const node = document.createElement(tag);

    if (html) {
        node.innerHTML = html;
    }

    Object.entries(attrs).forEach(([k, v]) => {
        node.setAttribute(k, v);
    });

    return node;
}
