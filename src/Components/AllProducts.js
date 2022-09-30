import { createDiv } from "../Services/functions.js";
import { createCard } from "../Services/functions.js";

const cardsProducts = {
    card1:{
        title: 'Product 1',
        paragraphe: 'Lorem Ipsum',
        img: {
            src: '/src/img/proxy-image.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    card2:{
        title: 'Product 2',
        paragraphe: 'Lorem Ipsum - Product 2',
        img: {
            src: '/src/img/proxy-image.jpg',
            class: 'card-img-top',
            width: '100%',
            height: '100%',
        },
        link: {
            href: '#',
            texte: 'Go somewhere',
        }
    },
    // card3:{
    //     title: 'Product 3',
    //     paragraphe: 'Lorem Ipsum - Product 3',
    //     img: {
    //         src: 'images/proxy-image3.jpg',
    //         class: 'card-img-top',
    //         width: '100%',
    //         height: '100%',
    //     },
    //     link: {
    //         href: '#',
    //         texte: 'Go somewhere',
    //     }
    // },
    // card4:{
    //     title: 'Product 4',
    //     paragraphe: 'Lorem Ipsum - Product 4',
    //     img: {
    //         src: 'images/proxy-image3.jpg',
    //         class: 'card-img-top',
    //         width: '100%',
    //         height: '100%',
    //     },
    //     link: {
    //         href: '#',
    //         texte: 'Go somewhere',
    //     }
    // },
    
}
const containerAllProducts = document.createElement('div');
containerAllProducts.setAttribute('class', 'container');

const cardContainer = createCard(cardsProducts);

containerAllProducts.appendChild(cardContainer);

export const AllProductsComponent = createDiv('AllProductsID', 'AllProductsClass', 'Tous les produits');

AllProductsComponent.appendChild(containerAllProducts);
