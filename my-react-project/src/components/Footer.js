import React from "react";
import logoFooterCatrinas from "../images/catrina.png";
import logoFooterAdalab from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer" role="contentinfo">
        <div class="footer__box">
          <img
            class="footer__icon"
            src={logoFooterCatrinas}
            alt="Catrinas logo"
            title="Logotipo Catrinas"
          />
          <small class="footer__copy txt-fsec txt-lighter txt-sm">
            Catrinas profile-cards @2020
          </small>
        </div>
        <a href="https://adalab.es/" target="_blank" class="footer__logo">
          <img
            class="footer__logo__img"
            src={logoFooterAdalab}
            title="Adalab"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
