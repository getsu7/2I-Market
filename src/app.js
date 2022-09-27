import { creatDiv } from "./AllProducts.js";

import { BonsPlansComponent } from "./BonsPlans.js";

import { SmartphonesComponent } from "./Smartphones.js";

import { PcMacComponent } from "./PcMacComponent.js";

import { createAHref } from "./functions.js";

console.log(creatDiv);
const body = document.body;
const container = document.createElement("div");

const h2 = document.createElement('h2');

const titreTopVente = document.createTextNode("Le Top des ventes");
h2.appendChild(titreTopVente);

h2.style.marginLeft = '5%';
h2.style.textDecoration = 'underline';

const nav = document.createElement('nav');
const divNav1 = document.createElement('div');
const aDivNav1 = document.createElement('a');

divNav1.appendChild(aDivNav1);
aDivNav1.href = "#";
let titreNavBar = document.createTextNode("2I Market");
aDivNav1.appendChild(titreNavBar);
nav.appendChild(divNav1);

nav.setAttribute('class', 'navbar navbar-expand-lg bg-dark');
nav.setAttribute('id', 'navbar');
divNav1.setAttribute('class', 'container-fluid');
aDivNav1.setAttribute('class', 'navbar-brand');
aDivNav1.style.color = 'white';

const divNav2 = document.createElement('div');

const ulNavbar = document.createElement('ul');
ulNavbar.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0');
divNav2.appendChild(ulNavbar);
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
li1.setAttribute('class', 'nav-item');
li2.setAttribute('class', 'nav-item');
li3.setAttribute('class', 'nav-item');
li4.setAttribute('class', 'nav-item');
let aLi1 = document.createElement('a');
let aLi2 = document.createElement('a');
let aLi3 = document.createElement('a');
let aLi4 = document.createElement('a');
aLi1.setAttribute('class', 'nav-link');
aLi2.setAttribute('class', 'nav-link');
aLi3.setAttribute('class', 'nav-link');
aLi4.setAttribute('class', 'nav-link');

aLi1.addEventListener('click', function () {
        body.replaceChild(creatDiv, body.lastChild);
})

aLi2.addEventListener('click', function () {
        body.replaceChild(BonsPlansComponent, body.lastChild);
});

aLi3.addEventListener('click', function () {
    body.replaceChild(SmartphonesComponent, body.lastChild);
});

aLi4.addEventListener('click', function () {
    body.replaceChild(PcMacComponent, body.lastChild);
});

aLi1.style.color = 'white';
aLi2.style.color = 'white';
aLi3.style.color = 'white';
aLi4.style.color = 'white';

aLi1.href = '#';
aLi2.href = '#';
aLi3.href = '#';
aLi4.href = '#';

let aToutLesProduits = document.createTextNode("Tous les Produits");
let BonsPlans = document.createTextNode("Bons plans");
let Smartphones = document.createTextNode("Smartphones");
let PcMac = document.createTextNode("Pc/Mac");


aLi1.appendChild(aToutLesProduits);
aLi2.appendChild(BonsPlans);
aLi3.appendChild(Smartphones);
aLi4.appendChild(PcMac);


li1.appendChild(aLi1);
li2.appendChild(aLi2);
li3.appendChild(aLi3);
li4.appendChild(aLi4);

ulNavbar.appendChild(li1);
ulNavbar.appendChild(li2);
ulNavbar.appendChild(li3);
ulNavbar.appendChild(li4);


const formResearchBar = document.createElement('form');
formResearchBar.setAttribute('class', 'd-flex');
formResearchBar.setAttribute('role', 'search');

const inputResearchBar = document.createElement('input');
inputResearchBar.setAttribute('class', 'form-control me-2');
inputResearchBar.setAttribute('type', 'search');
inputResearchBar.setAttribute('placeholder', 'Search');
inputResearchBar.setAttribute('aria-label', 'Search');

formResearchBar.appendChild(inputResearchBar);

/** Test Fonction */
const divTest = document.createElement('div');
divTest.setAttribute('id', 'test');
const aDiv= '';
const createDivAHref = createAHref(aDiv, divTest, 3);

body.appendChild(divTest);

console.log(createDivAHref);
/** FIN Test Fonction */

divNav1.style.display = 'flex';
divNav1.style.justifyContent = 'space-between';

divNav1.appendChild(divNav2);
divNav1.appendChild(formResearchBar);


const divCarousel = document.createElement('div');
divCarousel.setAttribute('id', 'myCarousel');
divCarousel.setAttribute('class', 'carousel slide');
divCarousel.setAttribute('data-bs-ride', 'carousel');

const divInnerCarousel = document.createElement('div');
divInnerCarousel.setAttribute('class', 'carousel-inner');

const divInnerCarouselItem1 = document.createElement('div');
const divInnerCarouselItem2 = document.createElement('div');
const divInnerCarouselItem3 = document.createElement('div');

divInnerCarouselItem1.setAttribute('class', 'carousel-item active');
divInnerCarouselItem2.setAttribute('class', 'carousel-item');
divInnerCarouselItem3.setAttribute('class', 'carousel-item');

const divInnerCarouselItem1Img = document.createElement('img');
const divInnerCarouselItem2Img = document.createElement('img');
const divInnerCarouselItem3Img = document.createElement('img');

divInnerCarouselItem1Img.src = 'images/proxy-image.jpg';
divInnerCarouselItem2Img.src = 'images/proxy-image.png';
divInnerCarouselItem3Img.src = 'images/proxy-image3.jpg';

divInnerCarouselItem1Img.setAttribute('class', 'd-block w-20');
divInnerCarouselItem2Img.setAttribute('class', 'd-block w-20');
divInnerCarouselItem3Img.setAttribute('class', 'd-block w-20');


divInnerCarouselItem1.appendChild(divInnerCarouselItem1Img);
divInnerCarouselItem2.appendChild(divInnerCarouselItem2Img);
divInnerCarouselItem3.appendChild(divInnerCarouselItem3Img);

divInnerCarousel.appendChild(divInnerCarouselItem1);
divInnerCarousel.appendChild(divInnerCarouselItem2);
divInnerCarousel.appendChild(divInnerCarouselItem3);

divCarousel.style.display = 'flex';
divCarousel.style.flexDirection = 'column';
divCarousel.style.marginLeft = '45%';
divCarousel.style.padding = '1em';

divCarousel.appendChild(divInnerCarousel);

container.appendChild(divCarousel);
container.appendChild(h2);
body.appendChild(nav);
body.appendChild(container);