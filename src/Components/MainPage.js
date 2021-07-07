import React from "react";
import { db } from "./firebase";
import{Link} from 'react-router-dom'
import clg from "./images/clg.png";
import Search from "./search";
import Footer from "./footer";
import Way from "./images/way.jpg";

export default function MainPage() {
  db.collection("collages")
    .get()
    .then((snap) => {
      if (!snap.empty) {
        // work with documents
        console.log("collection");
      } else {
        // Create some documents
        console.log(" there is no collection");
      }
    });

  return (
    <div className="container">
      <img className="icon" src={clg} />
      <h2 className="hello">RateMyCollege</h2>
      <h1 className="main-head">A better way to choose a college</h1>
      <Search />
      <div className="btm">
        <span>
          <Link to='/Colleges'><span className="wr">Write rview</span></Link>
          <Link to='/Request'><span className="ac">Add college</span></Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}
