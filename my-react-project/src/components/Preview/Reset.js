import React from "react";

class Reset extends React.Component {
  render() {
    return (
      <button
        className="preview__btn txt-xs txt-up txt-fsec js-reset"
        type="reset"
        title="Reset"
      >
        <i className="far fa-trash-alt"></i>
        <span className="preview__btn__reset">Reset</span>
      </button>
    );
  }
}

export default Reset;
