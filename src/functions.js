export function addStyleFlex(maVariable) {
    maVariable.style.display = 'flex';
    maVariable.style.flexDirection = 'row';
    maVariable.style.alignItems = 'center';
    maVariable.style.justifyContent = 'center';
}

export function createDiv(variableId, variableClass, text = null, p = p) {
    const body = document.body;

    const divContainer = document.createElement('div');
    divContainer.setAttribute(variableId, divContainer.id);
    divContainer.setAttribute(variableClass, divContainer.class);

    if (text != null){
        text = document.createTextNode(text)

        p = document.createElement('p');
    
        p.appendChild(text);
        divContainer.appendChild(p);
        return divContainer;
    }
    else {
        return divContainer;
    }

}

export function createAHref(variableA, Div, numberA) {
    for (let i = 0; i < numberA; i++) {
        variableA = document.createElement('a');
        variableA.href = '#';
        variableA.setAttribute('id', 'variableA' + i);
    
        Div.appendChild(variableA);
    }
    return Div
}