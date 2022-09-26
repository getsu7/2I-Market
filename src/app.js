import createNavBar from './components/NavBar/index.js';

document.body.onload = loadApp;

function loadApp() {
    const app = document.createElement('div');
    app.setAttribute('id', 'root');
    document.body.appendChild(app);
    createNavBar();
}
