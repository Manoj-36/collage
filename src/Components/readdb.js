import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";
import Colleges from "./Colleges";
import SIcon from "./images/search.svg"
import Connect from './Connect'


export default function Readdb(props) {
  const history = useHistory();
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

 const handleHistroy = () => {
   history.push("/collage/Colleges")
 }

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
      .doc("college") // use if for some reason you want that firestore generates the id
      // .doc(newSchool.id)
      .set(newSchool)
      .then(() => {
        setLoading(false);
        alert("Your College is in the Collections 🤝 ");
        handleHistroy()
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      {/* <h1>readdb du</h1> */}
      {collages.map((collage) => (
        <div key={collage.name}>
        </div>
        
      )
      )    }
      <div className="input-b">
        <input
          className="name-in"
          type="text"
          value={name}
          // placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        {/* <textarea value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} /> */}
       <button className="button" onClick={() => addSchool({ name })}><img rel="icon" type="image/svg+xml" className="s-icon" src={SIcon} /></button>
      </div>

    </div>
  );
}

