import React from "react";
import { findByTestAtrr, checkProps } from "./../../utils";
import { shallow } from "enzyme";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    test("it should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  //to make sure we are rendering a button
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    test("render the button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
