import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Presentation from "views/Presentation.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route
        path="/presentation"
        exact
        render={(props) => <Presentation {...props} />}
      />
     
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
