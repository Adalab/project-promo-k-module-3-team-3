import React from "react";
import Design from "./Form/Design";
import Fill from "./Form/Fill";
import Share from "./Form/Share";

class Form extends React.Component {
  render() {
    return (
      <form
        action="/signup"
        method="post"
        className="form txt-fsec txt-sm txt-light"
      >
        <Design
          handleChangePaletteStatus={this.props.handleChangePaletteStatus}
          state={this.props.state}
        />
        <Fill
          handleChange={this.props.handleChange}
          state={this.props.state}
          handleChangePhoto={this.props.handleChangePhoto}
        />
        <Share />
      </form>
    );
  }
}

export default Form;
