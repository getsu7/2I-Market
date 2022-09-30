import Home from "./home";
import Pcmac from "./pcmac";
import Products from "./products";
import NotFound from "./notFound";
import Bonplans from "./bonplans";
import Smartphone from "./smartphone";

const pages = {
    home: Home(),
    pcmac: Pcmac(),
    bonplans: Bonplans(),
    smartphone: Smartphone(),
    product: Products(),
    notFound: NotFound(),
};

export { pages };