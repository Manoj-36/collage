import React, { useState, useEffect } from "react";
import { db } from './firebase';
import Search from "./search";
import Footer from "./footer";
import Nav from './Nav'


const Request = () => {

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

    db.collection("Requests")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your Request is submited 👍");
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
      
      <h1 className="rq-contact">Add College</h1>
      <p className="rq-msg">I'll verify and prove it  </p>
      {/* <div>Input value: {value}</div>
      <input value={value} onChange={onChange} /> */}

      {/* <label>Name</label> */}
      <input
      className="rq-i"
        placeholder="College Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* <label>Email</label> */}
      <input
      className="rq-i"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* <label>Message</label> */}
      <textarea
      className="rq-txt"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
      className="rq-button"
        type="submit"
        style={{ background: loader ? "#ccc" : " #0066ff00" }}
      >
        Request
      </button>
      <Footer />
    </form>
  );
};

export default Request;
