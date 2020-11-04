import React from "react";
import logoHeader from "../images/Catrinas-7.png";
import "../stylesheets/layout/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <a href="./index.html" className="header__link">
          <img
            className="header__link__logo"
            src={logoHeader}
            alt="Awesome profile cards Logo"
            title="Página principal"
          />
        </a>
      </header>
    );
  }
}

export default Header;
