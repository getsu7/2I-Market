import Nav from "../components/nav";

export default() => {
    document.querySelector('#app').insertAdjacentHTML('afterbegin', Nav());
}