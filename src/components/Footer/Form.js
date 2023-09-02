import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Form.css";
import { FaLocationPin, FaPhone } from "react-icons/fa";

const Form = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const { user_name, user_email, message } = form.current;
    const errors = {};

    if (user_name.value.length < 3) {
      errors.name = "Name must have at least three letters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email.value)) {
      errors.email = "Email address is not valid.";
    }

    const [localPart, domain] = user_email.value.split("@");
    if (!localPart || !domain) {
      errors.email = "Email address is not valid.";
    }

    if (message.value.length < 10) {
      errors.message = "The message must have at least ten letters.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
    }
  };

  return (
    <div className="formbg" id="contact">
      <div className="greet">Contact me</div>
      <div className="form-cont">
        {isFormSubmitted ? (
          <p className="success-message">Form submitted successfully!</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} noValidate>
            <input type="text" name="user_name" placeholder="ENTER YOUR NAME" />
            {errorMessages.name && (
              <p className="error-message">{errorMessages.name}</p>
            )}
            <input
              type="email"
              name="user_email"
              placeholder="ENTER YOUR EMAIL"
            />
            {errorMessages.email && (
              <p className="error-message">{errorMessages.email}</p>
            )}
            <textarea name="message" placeholder="WRITE YOUR MESSAGE" />
            {errorMessages.message && (
              <p className="error-message">{errorMessages.message}</p>
            )}
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
