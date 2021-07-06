import React, { useEffect, useState } from "react";
import { db } from "./firebase";


export default function Todolist(props) {
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
      <h1>connect du</h1>
      {collages.map((collage) => (
        <div key={collage.name}>
          <h1>{collage.name}</h1>
          <h2>{props.result}</h2>
          <h2>{}</h2>
          {/* <p>{collage.message}</p> */}
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
     
    </div>
  );
}

