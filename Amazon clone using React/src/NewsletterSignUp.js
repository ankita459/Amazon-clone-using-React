import React from 'react';
import './App.css';

const NewsletterSignUp = () => {
    const handleSignUp = (e) => {
      e.preventDefault();
      // Add logic to handle the form submission (e.g., sending the email to a server)
      alert('Thank you for signing up!');
    };
  
    return (
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSignUp} className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  
  export default NewsletterSignUp;
