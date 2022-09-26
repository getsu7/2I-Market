console.log(document.body);

const body = document.body;

const h2 = document.createElement('h2');

const titreTopVente = document.createTextNode("Le Top des ventes");
h2.appendChild(titreTopVente);


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
// divNav2.setAttribute('class', 'collapse navbar-collapse');
// divNav2.setAttribute('id', 'navbarSupportedContent');

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


// ulNavbar.style.display = 'flex';
// ulNavbar.style.justifyContent = 'center';


const formResearchBar = document.createElement('form');
formResearchBar.setAttribute('class', 'd-flex');
formResearchBar.setAttribute('role', 'search');

const inputResearchBar = document.createElement('input');
inputResearchBar.setAttribute('class', 'form-control me-2');
inputResearchBar.setAttribute('type', 'search');
inputResearchBar.setAttribute('placeholder', 'Search');
inputResearchBar.setAttribute('aria-label', 'Search');

formResearchBar.appendChild(inputResearchBar);


divNav1.style.display = 'flex';
divNav1.style.justifyContent = 'space-between';

divNav1.appendChild(divNav2);
divNav1.appendChild(formResearchBar);

body.appendChild(nav);

body.appendChild(h2);
