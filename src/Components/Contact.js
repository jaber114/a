import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Contact.scss";
import emailjs from 'emailjs-com';


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_sjxuu3s', 'template_4idst8i', e.target, 'q-6TiHEQbWzehyhYu')

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact">
      <Link to="/">
        <ArrowBack className="arrow" />
      </Link>
      <div className="inputs">
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" />
          <input type="email" name="to_name" placeholder="Email" />
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
