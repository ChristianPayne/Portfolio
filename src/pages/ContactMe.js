import React from 'react';
import emailjs, { init } from 'emailjs-com';
import Header from '../components/SiteWide/Header';

export default function ContactMe() {

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  function sendEmail(e) {
    e.preventDefault();

    init(EMAILJS_SERVICE_ID);

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="m-4 p-2">
      <Header className="text-center text-xl">Contact Me</Header>
      <form className="contact-form px-8 md:w-1/2 grid grid-cols-1 gap-4" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="w-1/4" type="submit" value="Send" />
      </form>
    </div>
  );
}