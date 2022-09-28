const nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg bg-dark');
nav.setAttribute('id', 'navbar');

const ul = document.createElement('ul');
ul.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0');

const divNavBarUl = document.createElement('div');
divNavBarUl.appendChild(ul);

export const createMenu =  function createNavBar(menu) {
    Object.values(menu).forEach((item) => {
        console.log(item);
        const li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        const a = document.createElement('a');
        a.setAttribute('class', item.attributs.class);
        a.setAttribute('href', item.attributs.href);
        a.appendChild(document.createTextNode(item.title));
        a.style.color = 'white';

        li.appendChild(a);

        ul.appendChild(li);
        divNavBarUl.appendChild(ul);
        nav.appendChild(divNavBarUl);
        
        document.body.appendChild(nav);
    })
}


export function addStyleFlexCenter(maVariable) {
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

export function createAHrefForDiv(variableA, Div, numberA) {
    for (let i = 0; i < numberA; i++) {
        variableA = document.createElement('a');
        variableA.href = '#';
        variableA.setAttribute('id', variableA.id + i);
    
        Div.appendChild(variableA);
    }
    return Div;
}

export function createLi(constLi, numberLi, constUl) {
    for (let i = 0; i < numberLi; i++) {
        constLi = document.createElement('li');
        constLi.setAttribute('id', 'variableLi' + i);
        constLi.setAttribute('class', 'variableLi');

        constUl.appendChild(constLi);
    }
    return constUl;
}

export const container = document.createElement('div');

const divCarousel = document.createElement('div');

divCarousel.setAttribute('id', 'myCarousel');
divCarousel.setAttribute('class', 'carousel slide');
divCarousel.setAttribute('data-bs-ride', 'carousel');

const divInnerCarousel = document.createElement('div');
divInnerCarousel.setAttribute('class', 'carousel-inner');

export const createCarousel = function createCarousel(objet){
    Object.values(objet).forEach((item) => {
        const div = document.createElement('div');
        div.setAttribute('class', item.attributs.class);
        const img = document.createElement('img');
        img.src = item.img.src;
        img.setAttribute('class', item.img.attributs.class);

        div.appendChild(img);
        divInnerCarousel.appendChild(div);
        divCarousel.appendChild(divInnerCarousel);
        
        container.appendChild(divCarousel);

        document.body.appendChild(container);
    })
}