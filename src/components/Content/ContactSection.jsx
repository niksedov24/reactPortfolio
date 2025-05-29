import { motion } from "framer-motion";
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

  const Animation1 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation3 = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const Animation4 = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9 }}
      id="contact"
      className="contact-section"
    >
      <motion.h2 custom={1} variants={Animation4}>
        Contact
      </motion.h2>
      <motion.p custom={2} variants={Animation4}>
        {" "}
        Feel free to reach out to me!
      </motion.p>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.9 }}
        onSubmit={handleSubmit}
      >
        <motion.div custom={1} variants={Animation1} className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </motion.div>

        <motion.div custom={2} variants={Animation1} className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />
        </motion.div>

        <motion.div custom={3} variants={Animation1} className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your Message"
          />
        </motion.div>

        <motion.button custom={3} variants={Animation4} type="submit">
          Send Message
        </motion.button>

        {status === "success" && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-message">
            An error occurred. Please try again later.
          </p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;
