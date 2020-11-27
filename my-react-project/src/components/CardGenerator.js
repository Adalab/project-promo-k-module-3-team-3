import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import { sendRequest } from "../services/api";
import "../stylesheets/App.scss";
import "../stylesheets/layout/_card-grid.scss";

class CardGenerator extends React.Component {
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
      photo:
        "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=200,onerror=redirect,w=240/https://o.quizlet.com/-eqTyjYDzs5teZgDoQi9aQ.jpg",
      apiSuccess: false,
      apiCardUrl: "",
      apiError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangePaletteStatus = this.handleChangePaletteStatus.bind(this);
    this.handleChangePhoto = this.handleChangePhoto.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
  }
  handleChangePhoto(text) {
    this.setState({
      photo: text,
    });
  }
  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  handleChangePaletteStatus(number) {
    this.setState({
      palette: number,
    });
  }
  handleReset() {
    this.setState({
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo:
        "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=200,onerror=redirect,w=240/https://o.quizlet.com/-eqTyjYDzs5teZgDoQi9aQ.jpg",
      apiSuccess: false,
      apiCardUrl: "",
      apiError: "",
    });
  }

  handleShareClick() {
    const data = {
      name: this.state.name,
      job: this.state.job,
      photo: this.state.photo,
      phone: this.state.phone,
      email: this.state.mail,
      linkedin: this.state.linkedin,
      github: this.state.github,
      palette: this.state.palette,
    };
    sendRequest(data).then((response) => {
      if (response.success === true) {
        this.setState({
          apiSuccess: true,
          apiCardUrl: response.cardURL,
          apiError: "",
        });
      } else {
        this.setState({
          apiSuccess: false,
          apiCardUrl: "",
          apiError: response.error,
        });
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="grid">
          <Preview state={this.state} handleReset={this.handleReset} />
          <Form
            state={this.state}
            handleChange={this.handleChange}
            handleChangePaletteStatus={this.handleChangePaletteStatus}
            handleChangePhoto={this.handleChangePhoto}
            handleShareClick={this.handleShareClick}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
