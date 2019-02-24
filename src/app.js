import React from "react";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

import { About } from "./pages/about";
import {ABOUT_PAGE, HISTORY, ROOT} from "./routes";
import {NotFound} from "./pages/notFound";
import {Search} from "./pages/search";
import {History} from "./pages/history";
import NavBar from "./components/NavBar";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graphcms.com/simple/v1/swapi"
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
        <Router>
          <div className="App">
              <NavBar/>
              <Switch>
                  <Route path={ROOT} exact component={Search}/>
                  <Route path={HISTORY} exact component={History}/>
                  <Route path={ABOUT_PAGE} component={About}/>
                  <Route component={NotFound}/>
              </Switch>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export { App };
