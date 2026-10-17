

import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

    setSent(false);
    setError("");

    if (!endpoint) {
      setError("The contact form is not configured yet. Please try again later.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setSent(true);
    } catch (submitError) {
      console.error("Unable to send contact form:", submitError);
      setError("Sorry, your message couldn't be sent. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-sub">Send us a message and we'll get back to you.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Your message" required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <p className="sent" aria-live="polite">
            Thank you! Your message has been sent.
          </p>
        )}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;