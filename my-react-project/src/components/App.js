import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Holis!</p>
        </header>
        <main>
          <div className="principal">
            <form className="form">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" />
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
