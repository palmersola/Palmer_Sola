import React, { useState, useEffect } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/a5160810-24d2-11ed-ba49-1b632df649d8"; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="contact contactAfter">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="contact">
      <h2 id="contact-me">contact_me</h2>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="contactName">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="contactNameForm"
            required
          />
        </div>
        <div className="contactEmail">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="contactEmailForm"
            required
          />
        </div>
        <div className="contactMessage">
          <textarea
            placeholder="Your message"
            name="message"
            className="contactMessageForm"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button className="submitButton" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
