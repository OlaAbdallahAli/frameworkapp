import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg  fixed-top  ">
        <div className="container  d-flex">
          <NavLink
            to=""
            className={"navbar-brand text-white fw-bold text-uppercase"}
          >
            Start Framework
          </NavLink>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler collapsed show"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarSupportedContent"
            className="navbar-collapse collapse show "
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between ">
              <li className="nav-item me-3">
                <NavLink to="about" className="nav-link text-uppercase">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="portfolio" className="nav-link text-uppercase">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="contact" className="nav-link text-uppercase">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
