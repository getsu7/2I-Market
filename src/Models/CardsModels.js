export class CardsModels {
    constructor(title, description, imgSrc, imgClass, linkHref, linkText){
        this.title = title;
        this.description = description;
        this.img = new Image();
        this.img.src = imgSrc;
        this.img.class = imgClass;
        this.img.width = 100;
        this.img.height = 100;
        this.href = linkHref;
        this.hrefTtext = linkText;
    }

    createCard(){
        const divContainerCard = document.createElement('div');
        divContainerCard.setAttribute('id', 'myContainerCard');


        const divCard = document.createElement('div');
        divCard.setAttribute('class','card');
        divCard.style.width = '25%';
        divCard.style.marginLeft = '1%';
        divCard.style.marginRight = '1%';

        const divCardBody = document.createElement('div');
        divCardBody.setAttribute('class','card-body');

        this.img;
        this.img.setAttribute('src', this.img.src);
        this.img.style.width = this.img.width;
        this.img.style.height = this.img.height;

        const titleCardBody = document.createElement('h50');
        titleCardBody.appendChild(document.createTextNode(this.title));

        const descrCardBody = document.createElement('p');
        descrCardBody.appendChild(document.createTextNode(this.description));

        const linkCardBody = document.createElement('a');
        linkCardBody.setAttribute('href',this.href);
        linkCardBody.appendChild(document.createTextNode(this.hrefTtext));

        divCard.appendChild(this.img);
        divCard.appendChild(divCardBody);
        divCardBody.appendChild(titleCardBody);
        divCardBody.appendChild(descrCardBody);
        divCardBody.appendChild(linkCardBody);
        console.log(divCard);
        divContainerCard.appendChild(divCard);

        return divContainerCard;
    }
}