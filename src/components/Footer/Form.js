import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Form.css";
import { FaLocationPin, FaPhone } from "react-icons/fa";

const Form = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abmp1dn",
        "template_ybg1vnk",
        form.current,
        "VYQ-rzHZsqXgcljZ-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <div className="formbg" id="contact">
      <div className="greet">Contact me</div>
      <div className="form-cont">
        {isFormSubmitted ? (
          <p className="success-message">Form submitted successfully!</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="ENTER YOUR NAME" />
            <input
              type="email"
              name="user_email"
              placeholder="ENTER YOUR EMAIL"
            />
            <textarea name="message" placeholder="WRITE YOUR MESSAGE" />
            <input type="submit" value="Send" />
          </form>
        )}
      </div>

      <div className="phone">
        <FaPhone className="phicon" />
        <span className="spanform">0799797674</span>
      </div>
      <div className="cont-finish">
        <div className="finish"></div>
      </div>
    </div>
  );
};

export default Form;
