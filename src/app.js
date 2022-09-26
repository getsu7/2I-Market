import { insertElement } from './functions/insertElement.js';

document.body.onload = addApp;

function addApp() {
    const app = document.createElement("div");
    app.setAttribute("id", "root");
    document.body.insertAdjacentElement("beforeend", app);
    const root = document.querySelector("#root");
    const navBar = insertElement('nav', 'navbar navbar-expand-lg bg-dark', root);
    const container = insertElement('div', 'container-fluid', navBar);
    insertElement('a', 'navbar-brand', container);
}
