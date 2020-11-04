import React from "react";
import "../stylesheets/layout/_preview.scss";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__box">
          <button
            className="preview__btn txt-xs txt-up txt-fsec js-reset"
            type="reset"
            title="Reset"
          >
            <i className="far fa-trash-alt"></i>
            <span className="preview__btn__reset">Reset</span>
          </button>
          <article className="preview__card js-palette ">
            <div className="preview__card__title">
              <div className="preview__card__title__inner txt-fter">
                <h2 className="preview__card__title__name js-name js-preview-name">
                  Nombre Apellido
                </h2>
                <h3 className="preview__card__title__job txt-md txt-light js-job js-preview-job">
                  Front-end developer
                </h3>
              </div>
            </div>
            <div className="preview__card__box js__profile-image ">
              <img
                className="preview__card__box__img"
                src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=200,onerror=redirect,w=240/https://o.quizlet.com/-eqTyjYDzs5teZgDoQi9aQ.jpg"
                alt="Imagen"
                title="Imagen"
              />
            </div>
            <nav className="preview__card__sm" role="navigation">
              <ul className="preview__card__sm__list">
                <li className="preview__card__sm__list__icon">
                  <a
                    className="preview__card__sm__list__icon__link mobile js-preview-phone"
                    alt="Telephone"
                    target="_blank"
                    title="Teléfono"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li className="preview__card__sm__list__icon">
                  <a
                    className="preview__card__sm__list__icon__link email js-preview-email"
                    alt="Email"
                    target="_blank"
                    title="Email"
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>

                <li className="preview__card__sm__list__icon">
                  <a
                    className="js-preview-linkedin preview__card__sm__list__icon__link linkedin"
                    alt="Linkedin"
                    title="Linkedin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="preview__card__sm__list__icon">
                  <a
                    className=" js-preview-github preview__card__sm__list__icon__link github"
                    alt="Github"
                    title="Github"
                    target="_blank"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
    );
  }
}

export default Preview;
