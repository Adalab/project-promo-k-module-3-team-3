import React from "react";
import "../../stylesheets/layout/_form-design.scss";
import Collapsable from "./Collapsable";

class Design extends React.Component {
  render() {
    return (
      <fieldset className="form__design column">
        <Collapsable
          arrow={this.props.arrow}
          event={this.props.eventCollapsable}
          classTitle="design"
          icon="far fa-object-ungroup icon-menu"
          name="Diseña"
        ></Collapsable>
        <div
          className={`form__color--container form__color--container${this.props.state}`}
        >
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
    );
  }
}

export default Design;
