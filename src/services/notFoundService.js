import NotFound from "../../view/notFound";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = NotFound();
    return divElement;
};