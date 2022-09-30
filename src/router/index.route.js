import { pages } from "../../view/index";

const router = async (route) => {
    let content = document.querySelector("#app");
    content.innerHTML="";

    switch (route) {
        case "#/": {
            return content.insertAdjacentHTML( "afterbegin" ,pages.home);
        }
        case "#/products": {
            return content.insertAdjacentHTML( "afterbegin" ,pages.product);
        }
        case "#/bonplans": {
            return content.insertAdjacentHTML( "afterbegin" ,pages.bonplans);
        }
        case "#/pcmac": {
            return content.insertAdjacentHTML( "afterbegin" ,pages.pcmac);
        }
        case "#/smartphone": {
            return content.insertAdjacentHTML( "afterbegin" ,pages.smartphone);
        }
        default: {
            return content.insertAdjacentHTML( "afterbegin" ,pages.notFound);
        }
    }
};

export { router };