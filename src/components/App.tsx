import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MembersScreen from "../screens/MembersScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/members">
          <MembersScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
