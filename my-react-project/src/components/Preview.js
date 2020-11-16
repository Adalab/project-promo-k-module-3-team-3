import React from "react";
import "../stylesheets/layout/_preview.scss";
import Card from "./Preview/Card.js";
import Reset from "./Preview/Reset.js";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__box">
          <Reset handleReset={this.props.handleReset} />
          <Card state={this.props.state} />
        </div>
      </section>
    );
  }
}

export default Preview;
