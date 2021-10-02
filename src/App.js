import React, { Component } from "react";
import Header from "./component/header/index";
import Headline from "./component/headline/index";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "shruthi",
    lName: "Gowda",
    age: 30,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  //we want to dispatch this fetch method when its called
  //this is where we dispatch the action
  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 4;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the lesson to render the posts"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

//to connect component to the store
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

//use connect and pass the mapStateToposts and the action which we imported
export default connect(mapStateToProps, { fetchPosts })(App);
