import React from "react";

class Collapsable extends React.Component {
  render() {
    let classArrow;
    if (this.props.arrow === false) {
      classArrow = "";
    } else if (this.props.arrow === true) {
      classArrow = "btn-rotate";
    }
    return (
      <div
        onClick={this.props.event}
        className={`form__box js-form__box__button--${this.props.classTitle}`}
      >
        <div className="form__box__item">
          <i className={this.props.icon} aria-hidden="true"></i>
          <h2
            className="form__box__title txt-lg txt-light"
            aria-label={this.props.name}
          >
            {this.props.name}
          </h2>
        </div>
        <button className={`form__box__button ${classArrow}`}>
          <div className="form__box__button__left-bar"></div>
          <div className="form__box__button__right-bar"></div>
        </button>
      </div>
    );
  }
}

export default Collapsable;
