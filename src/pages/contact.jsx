import React from "react";


function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or need help? We’re here to assist you!</p>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="info-card">
          <h3>Email</h3>
          <p>support@mywebapp.com</p>
        </div>
        <div className="info-card">
          <h3>Phone</h3>
          <p>+91 7489445171</p>
        </div>
        <div className="info-card">
          <h3>Address</h3>
          <p>Tili Baghraj Bard, Sagar, Madhya Pradesh – 470001</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send us a message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
