import React from "react";
import Search from "./search";
import { Link } from "react-router-dom";
import clg from "./images/clg.png";
import MainPage from "./MainPage";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="container">
      <div className="main-icon">
        <img className="icon" src={clg} />
        <h2 className="hello">RateMyCollege</h2>
      </div>
      <h1 className="main-head">A better way to choose a college</h1>
      <Search />
      <div className="btm">
        <span>
          <Link to="/collage-review-system/Colleges">
            <span className="wr">Write rview</span>
          </Link>
          <Link to="/collage-review-system/Request">
            <span className="ac">Add college</span>
          </Link>
        </span>
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}
