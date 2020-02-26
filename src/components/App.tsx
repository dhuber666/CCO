import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MembersScreen from "../screens/MembersScreen";
import ClubScreen from "../screens/ClubScreen";
import Logo from "../components/home";
import Footer from "../components/layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 40
  }
}));


function App() {
  const [ref, { x, y, width }] = useDimensions();
  const classes = useStyles();
  return (


    <Router>

      <Grid container spacing={2} className={classes.container} >
        <Grid item md={4} xs={12} className={classes.root}>
          <Logo maxWidth={400} />
        </Grid>
        <Switch>

          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/members">
            <MembersScreen />
          </Route>
          <Route exact path="/cloud">
            <ClubScreen />
          </Route>
        </Switch>
        <Footer />
      </Grid>



    </Router>

  )
}

const Container = styled.div`

  padding-top: 150px;
  padding-left: 85px;
  padding-right: 85px;
  


`

export default App;
