import React, { useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from "./Containers/Index/Index";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Contact from "./Containers/Contact/Contact";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
