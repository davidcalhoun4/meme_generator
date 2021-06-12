import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Memes from "./Memes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/memes">
          <Memes />
        </Route>
        <Route path="/">
          <MemeGenerator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
