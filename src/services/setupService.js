import Nav from "../components/nav";

export default() => {
    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);
    document.body.insertAdjacentHTML("afterbegin", Nav());
}