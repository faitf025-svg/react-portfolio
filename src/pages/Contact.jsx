

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
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="you@example.com" required />

        <label>Message</label>
        <textarea name="message" rows="4" placeholder="Your message" required />

        <button type="submit">Send Message</button>
        {sent && <p>Thank you! Your message has been received 💖</p>}
      </form>
    </div>
  );
}

export default Contact;