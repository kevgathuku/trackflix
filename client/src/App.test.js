import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { App } from "./App";

it("renders without crashing", () => {
  const mockFetchTvShows = jest.fn();
  const tree = shallow(<App fetchTvShows={mockFetchTvShows} />);
  expect(toJSON(tree)).toMatchSnapshot();
});
