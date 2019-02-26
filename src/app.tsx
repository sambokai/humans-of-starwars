import React from "react";

import {ApolloProvider} from "react-apollo";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Provider as ReduxProvider} from "react-redux";

import {About} from "./pages/about";
import {ABOUT_PAGE, HISTORY, PERSON_DETAIL, ROOT} from "./routes";
import {NotFound} from "./components/NotFound";
import {Search} from "./pages/Search";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import {persistor, store as reduxStore} from "./store";
import PersonDetail from "./pages/PersonDetail";
import {PersistGate} from "redux-persist/integration/react";
import Loading from "./components/Loading";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graphcms.com/simple/v1/swapi"
  }),
  cache: new InMemoryCache()
});

function App() {
    return (
        <ReduxProvider store={reduxStore}>
            <PersistGate loading={<Loading/>} persistor={persistor}>
                <ApolloProvider client={apolloClient}>
                    <Router>
                        <div className="App">
                            <NavBar/>
                            <Switch>
                                <Route path={ROOT} exact component={Search}/>
                                <Route path={HISTORY} exact component={History}/>
                                <Route path={PERSON_DETAIL()} component={PersonDetail}/>

                                <Route path={ABOUT_PAGE} component={About}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </Router>
                </ApolloProvider>
            </PersistGate>
        </ReduxProvider>
    );
}

export {App};
