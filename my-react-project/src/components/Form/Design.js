import React from "react";
import "../../stylesheets/layout/_form-design.scss";
import Collapsable from "./Collapsable";

class Design extends React.Component {
  constructor(props) {
    super();
    this.handleChangePalette = this.handleChangePalette.bind(this);
  }
  handleChangePalette(event) {
    const number = parseInt(event.currentTarget.id);
    this.props.handleChangePaletteStatus(number);
  }
  render() {
    return (
      <fieldset className="form__design column">
        <Collapsable
          classTitle="design"
          icon="far fa-object-ungroup icon-menu"
          name="Diseña"
        >
          <div className="form__color--container">
            <div className="form__color m-top">
              <label htmlFor="color1" className="form__label">
                Colores
              </label>
              <div
                id="1"
                className="form__color__box js-col0"
                onClick={this.handleChangePalette}
              >
                <input
                  type="radio"
                  name="color"
                  id="1"
                  className="form__color__input js-color0"
                  checked={this.props.state.palette === 1}
                  onChange={this.handleChangePalette}
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
              <div
                id="2"
                onClick={this.handleChangePalette}
                className="form__color__box js-col1"
              >
                <input
                  type="radio"
                  name="color"
                  id="2"
                  checked={this.props.state.palette === 2}
                  onChange={this.handleChangePalette}
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
              <div
                id="3"
                onClick={this.handleChangePalette}
                className="form__color__box js-col2"
              >
                <input
                  type="radio"
                  name="color"
                  id="3"
                  checked={this.props.state.palette === 3}
                  onChange={this.handleChangePalette}
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
              <div
                id="4"
                onClick={this.handleChangePalette}
                className="form__color__box js-col3"
              >
                <input
                  type="radio"
                  name="color"
                  id="4"
                  checked={this.props.state.palette === 4}
                  onChange={this.handleChangePalette}
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
        </Collapsable>
      </fieldset>
    );
  }
}

export default Design;
