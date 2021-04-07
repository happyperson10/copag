import React from "react";
import Mynavbar from "./components/navbar.js";
import Myimage from "./components/scrollsnaps.js";
import Mycontact from "./components/contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="https://github.io/happyperson10/copag">
            <Mynavbar />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="https://github.io/happyperson10/copag">
            <Myimage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="https://github.io/happyperson10/copag/contact">
            <Mycontact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
