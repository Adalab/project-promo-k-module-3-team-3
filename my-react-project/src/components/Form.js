import React from "react";
import "../stylesheets/layout/_form-share.scss";
import "../stylesheets/layout/_form-design.scss";
import "../stylesheets/layout/_form.scss";

class Form extends React.Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-redundant-roles
      <form
        action="/signup"
        method="post"
        className="form txt-fsec txt-sm txt-light"
        role="form"
      >
        <fieldset className="form__design column">
          <div className="form__box js-form__box__button--design">
            <div className="form__box__item">
              <i
                className="far fa-object-ungroup icon-menu"
                aria-hidden="true"
              ></i>
              <h2 className="form__box__title txt-lg" aria-label="Diseña">
                Diseña
              </h2>
            </div>
            <button className="form__box__button">
              <div className="form__box__button__left-bar"></div>
              <div className="form__box__button__right-bar"></div>
            </button>
          </div>
          <div className="form__color--container">
            <div className="form__color m-top">
              <label htmlFor="color1" className="form__label">
                Colores
              </label>
              <div className="form__color__box js-col0">
                <input
                  type="radio"
                  name="color"
                  id="color1"
                  className="form__color__input js-color0"
                />
                <div className="form__color__option js-color">
                  <div className="form__color__first color-box"></div>
                  <div className="form__color__second color-box"></div>
                  <div className="form__color__third color-box"></div>
                </div>
              </div>
            </div>
            <div className="form__color">
              <label htmlFor="color1" className="form__label"></label>
              <div className="form__color__box js-col1">
                <input
                  type="radio"
                  name="color"
                  id="color1"
                  className="form__color__input js-color1"
                />
                <div className="form__color__option">
                  <div className="form__color__fourth color-box"></div>
                  <div className="form__color__fifth color-box"></div>
                  <div className="form__color__sixth color-box"></div>
                </div>
              </div>
            </div>
            <div className="form__color">
              <label htmlFor="color1" className="form__label"></label>
              <div className="form__color__box js-col2">
                <input
                  type="radio"
                  name="color"
                  id="color1"
                  className="form__color__input js-color2"
                />
                <div className="form__color__option">
                  <div className="form__color__seventh color-box"></div>
                  <div className="form__color__eighth color-box"></div>
                  <div className="form__color__nineth color-box"></div>
                </div>
              </div>
            </div>
            <div className="form__color">
              <label htmlFor="color1" className="form__label"></label>
              <div className="form__color__box js-col3">
                <input
                  type="radio"
                  name="color"
                  id="color1"
                  className="form__color__input js-color3"
                />
                <div className="form__color__option">
                  <div className="form__color__tenth color-box"></div>
                  <div className="form__color__eleventh color-box"></div>
                  <div className="form__color__twelfth color-box"></div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="form__fill column txt-dark bold">
          <div className="form__box js-form__box__button--fill">
            <div className="form__box__item">
              <i className="far fa-keyboard icon-menu" aria-hidden="true"></i>
              <h2
                className="form__box__title txt-lg txt-light"
                aria-label="Rellena"
              >
                Rellena
              </h2>
            </div>
            <button className="form__box__button">
              <div className="form__box__button__left-bar"></div>
              <div className="form__box__button__right-bar"></div>
            </button>
          </div>

          <div className="form__data">
            <div
              className="form__data__name m-top"
              aria-label="Nombre completo"
            >
              <label className="form__data__label" htmlFor="name">
                Nombre completo
              </label>
              <input
                required
                className="form__data__input js-input-name js-intro-name"
                type="text"
                maxlength="20"
                value=""
                name="name"
                id="name"
                placeholder="Ej: Catrina de Guadalupe"
              />
            </div>
            <div className="form__data__job" aria-label="Puesto">
              <label className="form__data__label js-input-job" htmlFor="job">
                Puesto
              </label>
              <input
                required
                className="form__data__input js-intro-job"
                type="text"
                maxlenght="18"
                value=""
                name="job"
                id="job"
                placeholder="Ej: Calavera Garbancera"
              />
            </div>

            <div className="form__data__name" aria-label="Imagen de perfil">
              <label className="form__data__label" htmlFor="image">
                Imagen de perfil
              </label>
              <input
                className="form__data__image__input js__profile-upload-btn"
                type="file"
                name="image"
                id="image"
              />
              <div className="form__data__image__buttonsbox">
                <div className="form__data__btn">
                  <button
                    type="button"
                    className="form__data__image__btn js__profile-trigger txt-sm txt-wh txt-fsec"
                    aria-label="Añadir imagen"
                  >
                    Añadir imagen
                  </button>
                </div>

                <div className="form__data__image__preview js__profile-preview"></div>
              </div>
            </div>
            <div className="form__data__name" aria-label="Contacto">
              <label className="form__data__label" htmlFor="email">
                Email
              </label>
              <input
                required
                className="form__data__input js-email js-intro-email"
                type="email"
                name="email"
                id="email"
                placeholder="Ej: catrina.guadalupe@gmail.com"
              />

              <label className="form__data__label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="form__data__input js-phone js-intro-phone"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ej: 01-11-55-55"
              />
              <label className="form__data__label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                required
                className="form__data__input js-linkedin js-intro-linkedin"
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="Ej: linkedin.com/in/catrina-guadalupe"
              />
              <label className="form__data__label" htmlFor="github">
                Github
              </label>
              <input
                required
                className="form__data__input js-github js-intro-github"
                type="text"
                name="github"
                id="github"
                placeholder="Ej: @catrina-guadalupe"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="form__share column">
          <div className="form__box js-form__box__button--share">
            <div className="form__box__item">
              <i className="fas fa-share-alt icon-menu" aria-hidden="true"></i>
              <h2 className="form__box__title txt-lg" aria-label="Comparte">
                Comparte
              </h2>
            </div>
            <button className="form__box__button">
              <div className="form__box__button__left-bar"></div>
              <div className="form__box__button__right-bar"></div>
            </button>
          </div>
          <div className="form__share--container">
            <button
              type="submit"
              className="form__share--button js-reset js-form__share--button txt-lg txt-wh txt-up txt-fsec"
              title="Crear tarjeta"
            >
              <i className="far fa-address-card"></i>Crear tarjeta
            </button>
            <div className="form__share--message js-form__share--message">
              <h3 className="form__box__title h3 txt-lg js-created">
                La tarjeta ha sido creada:
              </h3>
              <a
                className="card-link js-card-link txt-bright txt-xs"
                target="_blank"
                title="Link a la nueva tarjeta"
              >
                Link a la nueva tarjeta
              </a>

              <a
                className="twitter-share-button js-twitter share-twitter txt-wh txt-fsec txt-sm"
                target="_blank"
              >
                <i className="fab fa-twitter"></i> Compartir en twitter
              </a>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
