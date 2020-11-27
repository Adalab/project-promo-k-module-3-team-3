import React from "react";
import "../../stylesheets/layout/_form.scss";
import Collapsable from "./Collapsable";
import InputFill from "./InputFill";

const fr = new FileReader();
class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
  }

  writeImage() {
    const fileUrl = fr.result;
    this.props.handleChangePhoto(fileUrl);
    console.log(fileUrl);
  }

  handleFileChange() {
    const file = this.fileInput.current.files[0];
    fr.onload = this.writeImage;
    fr.readAsDataURL(file);
  }

  fakeClick() {
    this.fileInput.current.click();
  }
  render() {
    return (
      <fieldset className="form__fill column txt-dark bold">
        <Collapsable
          classTitle="fill"
          icon="far fa-keyboard icon-menu"
          name="Rellena"
        >
          <div className="form__data">
            <div
              className="form__data__name m-top"
              aria-label="Nombre completo"
            >
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label"
                for="name"
                labelName="Nombre completo"
                isRequired={true}
                classNamesInput="form__data__input js-input-name js-intro-name"
                type="text"
                lenght="20"
                nameInput="name"
                id="name"
                value={this.props.state.name}
                placeholder="Ej: Catrina de Guadalupe"
              />
            </div>
            <div className="form__data__job" aria-label="Puesto">
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label js-input-job"
                for="job"
                labelName="Puesto"
                isRequired={true}
                classNamesInput="form__data__input js-intro-job"
                type="text"
                lenght="18"
                nameInput="job"
                id="job"
                value={this.props.state.job}
                placeholder="Ej: Calavera Garbancera"
              />
            </div>
            {/* Meter en otro componente cuando podamos */}
            <div className="form__data__name" aria-label="Imagen de perfil">
              <label className="form__data__label" htmlFor="image">
                Imagen de perfil
              </label>
              <input
                onChange={this.handleFileChange}
                ref={this.fileInput}
                className="form__data__image__input js__profile-upload-btn"
                type="file"
                name=""
                id="image"
              />
              <div className="form__data__image__buttonsbox">
                <div className="form__data__btn">
                  <button
                    type="button"
                    className="form__data__image__btn js__profile-trigger txt-sm txt-wh txt-fsec"
                    aria-label="Añadir imagen"
                    onClick={this.fakeClick}
                  >
                    Añadir imagen
                  </button>
                </div>

                <div
                  className="form__data__image__preview js__profile-preview"
                  style={{ backgroundImage: `url(${this.props.state.photo})` }}
                ></div>
              </div>
            </div>
            {/* ///////// */}
            <div className="form__data__name" aria-label="Contacto">
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label js-input-job"
                for="email"
                labelName="Email"
                isRequired={true}
                classNamesInput="form__data__input js-email js-intro-email"
                type="email"
                nameInput="email"
                id="email"
                value={this.props.state.email}
                placeholder="Ej: catrina.guadalupe@gmail.com"
              />
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label"
                for="phone"
                labelName="Teléfono"
                isRequired={false}
                classNamesInput="form__data__input js-phone js-intro-phone"
                type="tel"
                nameInput="phone"
                id="phone"
                value={this.props.state.phone}
                placeholder="Ej: 01-11-55-55"
              />
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label"
                for="linkedin"
                labelName="Linkedin"
                isRequired={true}
                classNamesInput="form__data__input js-linkedin js-intro-linkedin"
                type="text"
                nameInput="linkedin"
                id="linkedin"
                value={this.props.state.linkedin}
                placeholder="Ej: linkedin.com/in/catrina-guadalupe"
              />
              <InputFill
                handleChange={this.props.handleChange}
                classLabel="form__data__label"
                for="github"
                labelName="Github"
                isRequired={true}
                classNamesInput="form__data__input js-github js-intro-github"
                type="text"
                nameInput="github"
                id="github"
                value={this.props.state.github}
                placeholder="Ej: @catrina-guadalupe"
              />
            </div>
          </div>
        </Collapsable>
      </fieldset>
    );
  }
}
export default Fill;
