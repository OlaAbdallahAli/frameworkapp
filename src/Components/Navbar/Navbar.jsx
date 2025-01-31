import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg  fixed-top  ">
        <div className="container  ">
          <NavLink
            to=""
            className={"navbar-brand text-white fw-bold text-uppercase"}
          >
            Start Framework
          </NavLink>
          <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-between ">
            <li className="nav-item">
              <NavLink to="about" className="nav-link text-uppercase">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="portfolio" className="nav-link text-uppercase">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link text-uppercase">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
