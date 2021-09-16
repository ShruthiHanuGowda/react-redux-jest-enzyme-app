import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

//importing utility function as i know i need it for this testing
import { findByTestAtrr } from "./../../utils";

//creating setup shallow rendered component
const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

//nested describe test
describe("Headline Component", () => {
  describe("Have props", () => {
    // eslint-disable-next-line no-unused-vars
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "test",
        desc: "desc test",
      };
      wrapper = setUp(props);
    });

    test("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    test("should render h1 header", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    test("should render desc", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    test("should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      console.log(component);
      expect(component.length).toBe(0);
    });
  });
});
