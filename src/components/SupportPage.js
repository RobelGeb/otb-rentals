import './SupportPage.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';

function SupportPage() {

  const form = useRef();
  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [messageTextArea, setMessage] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    // send email
    emailjs.sendForm('service_vjq34v8', 'template_99x2zbv', form.current, 'Oj-SnHQDR7wadDfg1')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });

    // reset after 5 milliseconds
    setTimeout(() => {
      event.target.reset();
    }, 500);

  };

  return (
    <div>
      <NavBar/>
      <div id="support-container">
        <div id="support-intro">
          <h2>Out The Box Support Team</h2>
          <p>For any questions please fill out the form down below, we will get
            back to you as soon as we can!
          </p>
        </div>

        <div id="support-form">
          <form ref={form} onSubmit={handleSubmit}>
            <div id="form-inputs-div">
              <label>Name</label>
              <input
                id="name_input"
                type="text"
                placeholder="Enter Name"
                name="user_name"
                onChange={event => {
                  setName(event.target.value);
              }}/>
              <label>Email</label>
              <input
              id="email_input"
                type="text"
                placeholder="Enter Email"
                name="user_email"
                onChange={event => {
                  setEmail(event.target.value)
                }}/>
              <label>Message</label>
              <textarea
                name="message"
                type="text"
                placeholder="Enter Message"
                onChange={event => {
                  setMessage(event.target.value);
                }}/>
            </div>
            <div id="submit-input-div">
              <input id="submit-input-btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SupportPage;