import React, { Component } from "react";
import Header from "./component/header/index";
import "./app.scss";
import Headline from "./component/headline/index";

const tempArr = [
  {
    fName: "shruthi",
    lName: "Gowda",
    age: 30,
    onlineStatus: true,
  },
];

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the lesson to render the posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
