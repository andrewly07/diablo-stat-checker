import React from "react";
// import Title from "../Title";
import styles from "../css/contact.module.css";
const Contact = () => {
  return (
    <section className={styles.contact}>
      {/* <Title title="contact" subtitle="us" /> */}
      <h1>CONTACT ME</h1>
      <div className={styles.center}>
        <form
          action="https://formspree.io/andrewlythedev@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="enter name"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>

            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="enter message"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
