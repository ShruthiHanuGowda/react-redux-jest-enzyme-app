import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "./../../utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    test("Should not throw warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text",
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    test("Should render title", () => {
      const component = findByTestAtrr(wrapper, "componentTitle");
      expect(component.length).toBe(1);
    });

    test("Should render desc", () => {
      const component = findByTestAtrr(wrapper, "componentDesc");
      expect(component.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    test("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
