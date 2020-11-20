import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <h1>Get your design right, right now</h1>
      <h2>Be the first know our latest offers and updates!</h2>
      <div className="contact__form">
        <input type="email" placeholder="Enter your email address" />
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Contact;
