import React, { Component } from "react";
import Header from "./component/header/index";
import "./app.scss";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
