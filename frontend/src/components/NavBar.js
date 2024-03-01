import { Link } from "react-router-dom"
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid mx-4">
        <Link className="navbar-brand fw-bold text-white" to="/">HealthMate</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className=" b nav-link text-white" aria-current="page" to="/">Home</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )

}

export default NavBar