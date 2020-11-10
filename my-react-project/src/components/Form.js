import React from "react";
import Design from "./Form/Design";
import Fill from "./Form/Fill";
import Share from "./Form/Share";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsable: false,
      arrow: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.setState({
      collapsable: !this.state.collapsable,
      arrow: !this.state.arrow,
    });
  }
  render() {
    return (
      <form
        action="/signup"
        method="post"
        className="form txt-fsec txt-sm txt-light"
      >
        <Design
          eventCollapsable={this.handleClick}
          state={this.state.collapsable}
          arrow={this.state.arrow}
        />
        <Fill
          eventCollapsable={this.handleClick}
          state={this.state.collapsable}
          arrow={this.state.arrow}
        />
        <Share
          eventCollapsable={this.handleClick}
          state={this.state.collapsable}
          arrow={this.state.arrow}
        />
      </form>
    );
  }
}

export default Form;
