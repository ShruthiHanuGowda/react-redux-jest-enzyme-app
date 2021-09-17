import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "./../../utils";

//this file has testing components
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;

  //runs for every test
  beforeEach(() => {
    component = setUp();
  });

  test("It should render without errors", () => {
    //shallow render of the component
    // const component = shallow(<Header />);
    // console.log(component.debug());
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
