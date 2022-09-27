import getHome from './components/Home/index.js';
import createNavBar from './components/NavBar/index.js';

document.body.onload = loadApp;

function loadApp() {
    const app = document.createElement('div');
    app.setAttribute('id', 'root');
    document.body.appendChild(app);
    const root = document.querySelector('#root');
    createNavBar(root);
    getHome();
}
