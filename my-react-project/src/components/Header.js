import React from "react";
import logoHeader from "../images/Catrinas-7.png";
import "../stylesheets/layout/_header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <Link to="/">
          <img
            className="header__link__logo"
            src={logoHeader}
            alt="Awesome profile cards Logo"
            title="Página principal"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
