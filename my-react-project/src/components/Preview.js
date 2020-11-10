import React from "react";
import "../stylesheets/layout/_preview.scss";
import Card from "./Preview/Card.js";
import Reset from "./Preview/Reset.js";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__box">
          <Reset />
          <Card />
        </div>
      </section>
    );
  }
}

export default Preview;
