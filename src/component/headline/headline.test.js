import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

//importing utility function as i know i need it for this testing
import { findByTestAtrr, checkProps } from "./../../utils";

//this file has testing components for class based

//creating setup shallow rendered component
const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

//nested describe test
describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            age: 23,
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

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
