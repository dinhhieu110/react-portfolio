// import React from "react";
import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [mss, setMss] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMss(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
        {mss ? (
          <span>Thanks for feedback, We'll reply you soon :)</span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
