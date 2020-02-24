import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MembersScreen from "../screens/MembersScreen";
import ClubScreen from "../screens/ClubScreen";
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
        <Route exact path="/Club">
          <ClubScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
