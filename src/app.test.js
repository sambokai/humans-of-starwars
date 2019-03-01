import React from "react";
import {shallow} from "enzyme";

import {App} from "./app";

describe("The main app component", () => {
  it("should include an ApolloProvider", () => {
    const component = <App />;

    const renderedComponent = shallow(component);

    expect(renderedComponent.exists("ApolloProvider")).toEqual(true);
  });
});
