export function insertElement(tag, className, parent) {
    const el = document.createElement(tag);
    el.setAttribute('class', className);
    parent.insertAdjacentElement("beforeend", el);
    return el;
}