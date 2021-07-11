import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import like from './images/like.png'
import Dislike from './images/dislike.png'

export default function Todolist(props) {
  const [collages, setCollages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const [loader, setLoader] = useState(false);


  const [clg, setClg] = useState(props.clgName);
  useEffect(() => {
    setClg(props.clgName);
  }, [props.clgName]);

  // to take input from user
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    setLoader(true);

  };

  const ref = db.collection(clg);

  function getCollages() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCollages(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getCollages();
  }, []);

  // ADD FUNCTION
  function addSchool(newSchool) {
    ref
      // db.collection("college").doc(clg)
      .doc(newSchool.id)
      .set(newSchool)
      .then(() => {
        setLoader(false);
        alert("Your Review is submited Succesfully 😁 ");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="clg-reviews"> All Reviews</h1>
      {collages.map((collage) => (
        <div className="rv-container" key={collage.name}>
          <h1 className="rv-arrow">></h1>
          <h2 className="clg-rec">{collage.review}</h2>
          <u><h2 className="clg-name">{collage.name}</h2></u>
          <h2 className="clg-msg">{collage.email}</h2>
          <hr className="clg-line" />
          {/* <p>{collage.message}</p> */}
        </div>
      ))}
      <div className="inputBox">
        <h3 className="clg-wrv">Write Review</h3>
        <p className="i-msg">Select any one for Recommend to viewers</p>
        {/* <h1>search : {props.msg}</h1> */}
        {/* <div>Input value: {value}</div> */}
        {/* <input value={value} placeholder='doc-id' onChange={onChange} /> */}

        <select
          className="rv-rec"
          value={review}
          onChange={(e) => {
            const setR = e.target.value;
            setReview(setR);
          }}
        >
          <option value="Select">Select</option>
          <option className="rv-op" value=" 👍 Recommend"> 👍 Recommend</option>
          <option className="rv-op" value=" 👎 Not Recommend"> 👎 Not Recommend</option>
          {/* {review} */}
        </select>
        <input
          className="rv-i-name"
          type="text"
          value={name}
          placeholder=" Student or staffs "
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="rv-i-msg"
          value={email}
          placeholder="Review"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="rv-button"
          onClick={() => addSchool({ name, email, review })}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
