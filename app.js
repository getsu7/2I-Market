import {HomeComponent} from './HomeComponent.js';
import {Produits} from './Produits.js';
import { Bonsplans } from './Bonsplans.js';
import { Smartphone } from './Smartphone.js';

const divUnderNavbar = document.createElement("div");

// Création Navbar
const divNavbar = document.createElement("div");
const navBar = document.createElement("navBar");
navBar.setAttribute('class', 'navbar navbar-dark bg-dark');
divNavbar.appendChild(navBar);

//
const a = document.createElement("a");
const nom = document.createTextNode("2I Market");
a.style.color = "white";
a.href = '#';
a.appendChild(nom);
navBar.appendChild(a);

const div2 = document.createElement("div");
div2.setAttribute('id', 'elementnav');
div2.style.display = 'flex';
div2.style.justifyContent = 'space-between';
navBar.appendChild(div2);

const a2 = document.createElement("a");
const produit = document.createTextNode("Tous les produits");
a2.setAttribute('id', 'produits');
a2.style.color = "white";
a2.href = '#';
a2.appendChild(produit);
div2.appendChild(a2);
a2.addEventListener('click', function() {
    document.body.replaceChild(Produits,document.body.lastChild);
});

const a3 = document.createElement("a");
const bonsplans = document.createTextNode("Bons plans");
a3.setAttribute('id', 'bonsplans');
a3.style.color = "white";
a3.href = '#';
a3.appendChild(bonsplans);
div2.appendChild(a3);
a3.addEventListener('click', function() {
    document.body.replaceChild(Bonsplans,document.body.lastChild);
});

const a4 = document.createElement("a");
const smartphone = document.createTextNode("Smartphone");
a4.setAttribute('id', 'smartphone');
a4.style.color = "white";
a4.href = '#';
a4.appendChild(smartphone);
div2.appendChild(a4);
a4.addEventListener('click', function() {
    document.body.replaceChild(Smartphone,document.body.lastChild);
});

const a5 = document.createElement("a");
const pcmac = document.createTextNode("PC/Mac");
a5.setAttribute('id', 'pcmac');
a5.style.color = "white";
a5.href = '#';
a5.appendChild(pcmac);
div2.appendChild(a5);

const form = document.createElement("form");
form.setAttribute('class', 'form-inline');
navBar.appendChild(form);

const input = document.createElement("input");
input.setAttribute('class', 'form-control mr-sm-2');
input.setAttribute('type','search');
input.setAttribute('placeholder','Rechercher');
form.appendChild(input);

//
const divTopvente = document.createElement("div");
const adivTopvente = document.createElement("a");
const nomTopvente = document.createTextNode("Le des Top ventes");
//const divCarousel = document.createElement('div');
//div2.setAttribute('id','carouselControls');
// divTopvente.appendChild(adivTopvente);
// adivTopvente.appendChild(nomTopvente);

const body = document.body;
body.appendChild(divNavbar);
//body.appendChild(divTopvente);
body.appendChild(divUnderNavbar);


