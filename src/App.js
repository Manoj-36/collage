import React from "react";
import "./App.css";
import Search from "./Components/search";
import ReadDb from "./Components/readdb";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Connect from "./Components/Connect";
import Footer from "./Components/footer";
import Colleges from "./Components/Colleges";
import Request from "./Components/Request";
import Todolist from "./Components/Todolist";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Mainpage">
            <MainPage />
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
