import React from "react";
import "../../stylesheets/layout/_form.scss";
import Collapsable from "./Collapsable";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="form__fill column txt-dark bold">
        <Collapsable
          arrow={this.props.arrow}
          event={this.props.eventCollapsable}
          classTitle="fill"
          icon="far fa-keyboard icon-menu"
          name="Rellena"
        ></Collapsable>
        <div className={`form__data form__data${this.props.state}`}>
          <div className="form__data__name m-top" aria-label="Nombre completo">
            <label className="form__data__label" htmlFor="name">
              Nombre completo
            </label>
            <input
              required
              className="form__data__input js-input-name js-intro-name"
              type="text"
              maxLength="20"
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
              maxLength="18"
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
    );
  }
}
export default Fill;
