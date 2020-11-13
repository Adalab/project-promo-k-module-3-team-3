import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import "../stylesheets/App.scss";
import "../stylesheets/layout/_card-grid.scss";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  render() {
    return (
      <>
        <Header />
        <div className="grid">
          <Preview />
          <Form state={this.state} handleChange={this.handleChange} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
