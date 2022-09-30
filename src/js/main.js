import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import navService from "../services/navService";
import setupService from "../services/setupService";
import {router} from "../router/index.route";

const init = () => {
    router(window.location.hash).then();
    setupService()
    window.addEventListener("hashchange", () => {
        router(window.location.hash).then();
    });
};

window.addEventListener("load", init);
