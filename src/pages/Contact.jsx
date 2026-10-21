import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="paint-navbar">
        <Link to="/" className="paint-logo">
          <i className="bi bi-palette-fill"></i> PAINTORA
        </Link>
        <nav className="paint-nav-links">
          <Link to="/">Home</Link>
          <Link to="/our-paint">Our Paint</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <i className="bi bi-bag"></i> Cart
          </Link>
        </nav>
      </header>

      <section className="contact-banner" data-aos="fade-up">
        <span className="paint-eyebrow">WE'RE HERE TO HELP</span>
        <h1>Let's Talk Colours</h1>
        <p>Have a question? Send us a message.</p>
      </section>

      <main className="contact-main">
        <div className="contact-info" data-aos="fade-right">
          <span className="paint-eyebrow">CONTACT PAINTORA</span>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Need help choosing paint or have a question about our
            collection? Send us your enquiry.
          </p>

          <div className="contact-info-item">
            <span><i className="bi bi-envelope"></i></span>
            <div>
              <h3>Email</h3>
              <p>hello@paintora.example</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span><i className="bi bi-telephone"></i></span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span><i className="bi bi-geo-alt"></i></span>
            <div>
              <h3>Location</h3>
              <p>Visit your local PAINTORA store</p>
            </div>
          </div>

          <img
            className="contact-image"
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=85"
            alt="Paint roller and wall painting"
          />
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <h2>Send Us a Message</h2>
          <p>Fill in the details below and we'll be happy to help.</p>

          {submitted && (
            <div className="contact-success" role="status">
              Thank you! Your message has been submitted in this demo.
            </div>
          )}

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <select id="contact-subject" name="subject" required defaultValue="">
            <option value="" disabled>Select an enquiry</option>
            <option>Paint Products</option>
            <option>Colour Suggestions</option>
            <option>Order Support</option>
            <option>Other</option>
          </select>

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="How can we help you?"
            required
          />

          <button type="submit" className="paint-btn">
            Send Message <i className="bi bi-send"></i>
          </button>
        </form>
      </main>

      <footer className="paint-footer">
        <Link to="/" className="paint-logo">
          <i className="bi bi-palette-fill"></i> PAINTORA
        </Link>
        <p>Beautiful colours. Beautiful spaces.</p>
        <div>
          <Link to="/our-paint">Our Paint</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <small>© 2026 PAINTORA. All rights reserved.</small>
      </footer>
    </>
  );
}

export default Contact;