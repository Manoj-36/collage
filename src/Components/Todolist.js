import React, { useEffect, useState } from "react";
import { db } from "./firebase";


export default function Todolist(props) {
  const [collages, setCollages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clg, setClg] = useState(props.clgName)
  useEffect(() => { setClg(props.clgName)}, [props.clgName] )


  // to take input from user
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

 
  const ref = db.collection(clg)

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
        setLoading(false);
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
      <h1>Reviews</h1>
      {collages.map((collage) => (
        <div key={collage.name}>
          <h2>{collage.name}</h2>
          <h2>{collage.email}</h2>
          {/* <p>{collage.message}</p> */}
        </div>
      ))}
      <div className="inputBox">
        <h3>Add New</h3>
        {/* <h1>search : {props.msg}</h1> */}
        {/* <div>Input value: {value}</div> */}
        {/* <input value={value} placeholder='doc-id' onChange={onChange} /> */}
        <input
          type="text"
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <textarea value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => addSchool({ name, email })}>Submit</button>
      </div>
     
    </div>
  );
}

