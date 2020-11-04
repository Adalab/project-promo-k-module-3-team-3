import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
