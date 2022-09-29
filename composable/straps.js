export const createElementAndSetAttributes = (tagName, attributes, parent) => {

    const tag = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value])=> {
        tag.setAttribute(key, value);
    })
    parent.appendChild(tag)

    return tag;
}

