import React from "react";
import Footer from "./Footer";
import logoLandingCatrinas from "../images/Catrinas-7.png";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <>
        <main className="landing txt-fsec" role="main">
          <img
            className="landing__img"
            src={logoLandingCatrinas}
            alt="Page Logo"
          />
          <section className="landing__intro">
            <h1
              className="landing__intro__title txt-bright txt-xl txt-fpri"
              aria-label="Crea tu tarjeta"
            >
              Crea tu tarjeta de visita
            </h1>
            <p className="landing__intro__text txt-dark">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
          </section>
          <section className="landing__icons txt-light">
            <ul className="landing__icons__list">
              <li className="landing__icons__item design">
                <i className="far fa-object-ungroup icon"></i>
                <p className="landing__icons__text">Diseña</p>
              </li>
              <li className="landing__icons__item fill">
                <i className="far fa-keyboard icon"></i>
                <p className="landing__icons__text">Rellena</p>
              </li>
              <li className="landing__icons__item share">
                <i className="fas fa-share-alt icon"></i>
                <p className="landing__icons__text">Comparte</p>
              </li>
            </ul>
          </section>
          <div className="landing__button">
            <Link to="/card-generator">
              <div
                className="landing__button__link txt-md txt-wh txt-up"
                title="Make your card!"
              >
                Comenzar
              </div>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
