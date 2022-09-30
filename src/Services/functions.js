const nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg bg-dark');
nav.setAttribute('id', 'navbar');

const ul = document.createElement('ul');
ul.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0');

const divNavBarUl = document.createElement('div');
divNavBarUl.appendChild(ul);

export const createMenu =  function createNavBar(menu) {
    Object.values(menu).forEach((item) => {
        // console.log(item);
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

export function createDiv(variableId, variableClass, text = null) {

    const divContainer = document.createElement('div');
    divContainer.setAttribute(variableId, divContainer.id);
    divContainer.setAttribute(variableClass, divContainer.class);

    if (text != null){

        const p = document.createElement('p');
    
        p.appendChild(document.createTextNode(text));
        divContainer.appendChild(p);

        // console.log(divContainer);
        divContainer.appendChild(container);
        return divContainer;
    }
    else {
        divContainer.appendChild(container)
        return divContainer;
    }

}


export const container = document.createElement('div');



export const createCarousel = function createCarousel(objet){
    const divCarousel = document.createElement('div');

    divCarousel.setAttribute('id', 'myCarousel');
    divCarousel.setAttribute('class', 'carousel slide');
    divCarousel.setAttribute('data-bs-ride', 'carousel');

    const divInnerCarousel = document.createElement('div');
    divInnerCarousel.setAttribute('class', 'carousel-inner');

    Object.values(objet).forEach((item) => {
        const div = document.createElement('div');
        div.setAttribute('class', item.attributs.class);
        const img = document.createElement('img');
        img.src = item.img.src;
        img.setAttribute('class', item.img.attributs.class);

        div.appendChild(img);
        divInnerCarousel.appendChild(div);
        divCarousel.appendChild(divInnerCarousel);
        
    })
    return divCarousel;
}

export function createCard(card) {
    const divContainerCard = document.createElement('div');
    divContainerCard.setAttribute('id','myContainerCard');
    addStyleFlexCenter(divContainerCard);

    Object.values(card).forEach((item) => {

        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');
        divCard.style.width = '25%';
        divCard.style.marginLeft = '1%';
        divCard.style.marginRight = '1%';

        const divBody = document.createElement('div');
        divBody.setAttribute('class', 'card-body');

        const img = document.createElement('img');
        img.src = item.img.src;
        img.setAttribute('class', item.img.class);
        img.style.width = item.img.width;
        img.style.height = item.img.height;

        const h5 = document.createElement('h5');
        h5.appendChild(document.createTextNode(item.title));

        const p = document.createElement('p');
        p.appendChild(document.createTextNode(item.paragraphe));

        const a = document.createElement('a');
        a.setAttribute('href', item.link.href);
        a.appendChild(document.createTextNode(item.link.texte));


        divCard.appendChild(img);
        divCard.appendChild(divBody);
        divBody.appendChild(h5);
        divBody.appendChild(p);
        divBody.appendChild(a);

        divContainerCard.appendChild(divCard);
        // divContainer.appendChild(divContainerCard);
        // return divContainer;
        
        
    })
    return divContainerCard;
}