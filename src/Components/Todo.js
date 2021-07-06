import React, { useState, useEffect } from "react";
import { db } from './firebase';
import Search from "./search";


const Todo = () => {

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("collages")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Thanks for Review see you next time 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit} id="Contact">
      <h1 className="contact"><spam className="start"> | </spam>Contact Me </h1>
      <div>Input value: {value}</div>
      <input value={value} onChange={onChange} />

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
      className="msg"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " #0066ff00" }}
      >
        Submit
      </button>

    </form>
  );
};

export default Todo;
