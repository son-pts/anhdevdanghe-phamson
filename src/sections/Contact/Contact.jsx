import styles from "./ContactStyles.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uun8kaz", "template_cx1ifoa", form.current, {
        publicKey: "G1n7eoYHXCmV3kaEV",
      })
      .then(
        () => {
          setMessage("Gửi email thành công!");
        },
        (error) => {
          setMessage("Gửi email thất bại: " + error.text);
        }
      );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Phone number
          </label>
          <input
            type="tel"
            name="user_number"
            id="number"
            placeholder="Phone"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" />
        {message && <p>{message}</p>}
      </form>
    </section>
  );
}

export default Contact;
