import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
