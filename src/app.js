import { HomeComponent } from "./Components/HomeComponent.js";

import { AllProductsComponent } from "./Components/AllProducts.js";

import { BonsPlansComponent } from "./Components/BonsPlans.js";

import { SmartphonesComponent } from "./Components/Smartphones.js";

import { PcMacComponent } from "./Components/PcMacComponent.js";

import { createMenu } from "./Services/functions.js";

// import { createCarousel } from "./Services/functions.js";

import { container } from "./Services/functions.js";

// import { createCard } from "./Services/functions.js";

// import { CardsModels } from "./Models/CardsModels.js";

const body = document.body;

const menu = {
    home: {
        title: "2iMarket",
        attributs: 
            {
                class: "nav-link",
                href: "#",
            },  
    },
    allProducts: {
        title: "Tous les produits",
        attributs: 
            {
                class: "nav-link",
                href: "#",
            },
    },
    bonsPlans: {
        title: "Bons plans",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
    smartphones: {
        title: "Smartphones",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
    pcMac: {
        title: "Pc/Mac",
        attributs:
            {
                class: "nav-link",
                href: "#",
            },
    },
};
createMenu(menu)

document.querySelectorAll('a[class="nav-link"]').forEach((item) => {
    item.addEventListener('click', (e) => {
            e.preventDefault();
            container.replaceChildren();
            switch (item.innerText) {
                case '2iMarket':
                    container.replaceChildren(HomeComponent);
                    break;
                case 'Tous les produits':
                    container.appendChild(AllProductsComponent);
                    break;
                case 'Bons plans':
                    container.appendChild(BonsPlansComponent);
                    break;
                case 'Smartphones':
                    container.appendChild(SmartphonesComponent);
                    break;
                case 'Pc/Mac':
                    container.appendChild(PcMacComponent);
                    break;
            }
        })   
})

body.appendChild(container);
body.appendChild(HomeComponent);