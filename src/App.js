import React, { useState, useEffect } from "react";
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
import Cimg from "./Components/images/clg.png";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="load-icon">
          <img className="load-img" src={Cimg} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/collage">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/collage/Colleges">
              <Colleges />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/collage/ReadDb">
              <ReadDb />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/collage/Request">
              <Request />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
