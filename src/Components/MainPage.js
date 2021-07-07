import React from "react";
import { db } from "./firebase";
import clg from "./images/uni.png";
import { Link } from "react-router";
import Search from "./search";
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
      <img className="img" src={Way} />
      <h1 className="hello">RateMyCollege</h1>
      <img className="icon" src={clg} />
      <h1 className="main-head">A better way to choose a Collage</h1>
      <div className="search">
        <Search />
      </div>
      <div className="btm">
        <span>
          <span className="wr">Write Review</span>
          <span className="ac">Add College</span>
        </span>
      </div>
    </div>
  );
}
