import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsable: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.setState({
      collapsable: !this.state.collapsable,
    });
  }
  render() {
    let classArrow;
    let classContent;
    if (this.state.collapsable === false) {
      classArrow = "";
      classContent = "";
    } else {
      classArrow = "btn-rotate";
      classContent = "open";
    }
    return (
      <>
        <div
          onClick={this.handleClick}
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
        <div className={`collapsable-content ${classContent}`}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Collapsable;
