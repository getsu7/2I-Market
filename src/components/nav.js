import {routes} from '../composable/routes.js'

export default() => {
    return `
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand" href=${routes.home.href}>${routes.home.name}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href=${routes.products.href}>${routes.products.name}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=${routes.bonplans.href}>${routes.bonplans.name}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=${routes.smartphone.href}>${routes.smartphone.name}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=${routes.pcmac.href}>${routes.pcmac.name}</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
`
}


