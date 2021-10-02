import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./utils/index";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  //to be check the debug()
  //we find declaration of child component using debug
  //console.log(wrapper.debug());
  return wrapper;
};

describe("app component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  test("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updateState Method should update state as expected", () => {
    //create instance of that class
    const classInstance = wrapper.instance();
    //then fire that method or function
    classInstance.exampleMethod_updateState();
    //to check button state
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue Method should return value as expected", () => {
    //create instance of that class
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(1);
    expect(newValue).toBe(2);
  });
});
