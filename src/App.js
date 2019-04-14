import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

import "./scss/app.scss";

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 300, exit: 300 }}
            classNames={"slide"}
            key={location.key}
          >
            <div className="App">
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/add" component={AddContact} />
                <Route path="/edit/:id" component={EditContact} />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
    )
  </Router>
);

export default App;
