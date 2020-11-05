import React from "react";
import logoFooterCatrinas from "../images/catrina.png";
import logoFooterAdalab from "../images/logo-adalab.png";
import "../stylesheets/layout/_footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <div className="footer__box">
          <img
            className="footer__icon"
            src={logoFooterCatrinas}
            alt="Catrinas logo"
            title="Logotipo Catrinas"
          />
          <small className="footer__copy txt-fsec txt-lighter txt-sm">
            Catrinas profile-cards @2020
          </small>
        </div>
        <a
          href="https://adalab.es/"
          target="_blank"
          rel="noreferrer"
          className="footer__logo"
        >
          <img
            className="footer__logo__img"
            src={logoFooterAdalab}
            title="Adalab"
            alt="Adalab logo"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
