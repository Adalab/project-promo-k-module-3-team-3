import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import "../stylesheets/App.scss";
import "../stylesheets/layout/_card-grid.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="grid">
          <Preview />
          <Form />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
