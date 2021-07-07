import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Connect from './Connect'


export default function Todolist(props) {
  const [collages, setCollages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name , setName] = useState(props.msg);
  useEffect(() => { setName(props.msg)}, [props.msg] )
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
      <h1>readdb du</h1>
      {collages.map((collage) => (
        <div key={collage.name}>
          <h2>{collage.name}</h2>
          {/* <Connect result={collage.name} /> */}

          {/* <h2>{collage.pic}</h2> */}
          <h2>{collage.email}</h2>
          <p>{collage.message}</p>
        </div>
      ))}
      <div className="input-b">
        {/* <h3>Add New</h3>
        <h1>search : {props.msg}</h1>
        <div>Input value: {value}</div>
        <input value={value} placeholder='doc-id' onChange={onChange} /> */}
        <input
          className="name-in"
          type="text"
          value={name}
          // placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        {/* <textarea value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} /> */}
        <button className="button" onClick={() => addSchool({ name })}>Search</button>
      </div>

    </div>
  );
}

