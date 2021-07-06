import React from "react";
// import "./App.css";
import Search from "./Components/search";
import ReadDb from "./Components/readdb";
import { BrowserRouter, Route, } from 'react-router-dom'
import MainPage from "./Components/MainPage";
import Connect from "./Components/Connect"
import Todolist from "./Components/Todolist";

function App() {
  return (
    <div>
      <Connect />
      {/* <Search /> */}
      {/* <MainPage /> */}
      {/* <Todolist /> */}
    </div>
  );
}

export default App;
