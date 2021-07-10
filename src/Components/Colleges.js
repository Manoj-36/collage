import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Todolist from "./Todolist";
import Footer from "./footer";
import Nav from "./Nav";



export default function Colleges(props) {
  const [collages, setCollages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // to take input from user
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

 
  const ref = db.collection("collages")

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
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
        <Nav />
      {collages.map((collage) => (
        <div className="clg-container" key={collage.name}>
          <div className="clg-name-container">
          <h1 className="clg-head" >{collage.name}</h1>
          </div>
          <Todolist clgName={collage.name} />
          {/* <h2>{collage.pic}</h2> */}
          {/* <h2>{collage.email}</h2>
          <p>{collage.message}</p> */}
        </div>
      ))}
      {/* <div className="inputBox">
        <h3>Add New</h3>
        <h1>search : {props.msg}</h1>
        <div>Input value: {value}</div>
        <input value={value} placeholder='doc-id' onChange={onChange} />
        <input
          type="text"
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <textarea value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => addSchool({ name, email })}>Submit</button>
      </div> */}
      <Footer />
    </div>
  );
}

