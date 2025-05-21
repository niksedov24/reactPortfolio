import React, { useState } from "react";
import "../css/Content.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("success");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p> Feel free to reach out to me!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your Message"
          />
        </div>

        <button type="submit">Send Message</button>

        {status === "success" && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-message">
            An error occurred. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
