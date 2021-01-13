import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar2 from "../Navbar2/Navbar2";
import classes from "./Subpage.css";
import Project from "./Project/Project";

class SubPage extends Component {
  render() {
    return (
      <div className={classes.Subpage}>
        <Navbar2 />
        <Route path="/home/profile/project" render={(props) => <Project />} />
      </div>
    );
  }
}

export default SubPage;
