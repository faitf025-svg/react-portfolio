

import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-sub">Send us a message and we'll get back to you.</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea name="message" rows="5" placeholder="Your message" required />

        <button type="submit">Send Message</button>
        {sent && <p className="sent">Thank you! Your message has been received 💖</p>}
      </form>
    </div>
  );
}

export default Contact;import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-sub">Send us a message and we'll get back to you.</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea name="message" rows="5" placeholder="Your message" required />

        <button type="submit">Send Message</button>
        {sent && <p className="sent">Thank you! Your message has been received 💖</p>}
      </form>
    </div>
  );
}

export default Contact;