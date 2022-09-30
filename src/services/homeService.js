import Home from "../../view/home";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = Home();
    return divElement;
};