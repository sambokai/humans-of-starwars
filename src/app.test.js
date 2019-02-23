import React from "react";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import { App } from "./app";

Enzyme.configure({ adapter: new Adapter() });

describe("The main app component", () => {
  it("should include an ApolloProvider", () => {
    const component = <App />;

    const renderedComponent = shallow(component);

    expect(renderedComponent.exists("ApolloProvider")).toEqual(true);
  });
});
