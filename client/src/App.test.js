import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { App } from "./App";

it("renders without crashing", () => {
  const tree = shallow(<App />);
  expect(toJSON(tree)).toMatchSnapshot();
});
