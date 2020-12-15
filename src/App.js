import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import ContactPage from "./pages/Contact.js";
import DashboardPage from "./pages/Dashboard.js";
import LoginPage from "./pages/Login.js";
import history from "./utils/history.js";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
