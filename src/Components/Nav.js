import React from "react";
import { Link } from "react-router-dom";
import Clg from "./images/clg.png";
import Search from "./search";

const Nav = () => {
  return (
    <div className="nav-container">
      <div>
        <img className="nav-icon" src={Clg} />
        <Link to="/">
          <h1 className="nav-head">
            RateMy<span className="f-h-c">College</span>
          </h1>
        </Link>
      </div>
      <Search className="nav-search" />
    </div>
  );
};

export default Nav;
