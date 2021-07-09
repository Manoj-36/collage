import React from "react";
import "./App.css";
import Search from "./Components/search";
import ReadDb from "./Components/readdb";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Connect from "./Components/Connect";
import Footer from "./Components/footer";
import Home from "./Components/Home";
import Colleges from "./Components/Colleges";
import Request from "./Components/Request";
import Todolist from "./Components/Todolist";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Colleges">
          <Colleges />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Request">
          <Request />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
