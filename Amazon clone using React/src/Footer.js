import React from 'react';
import './App.css';

const Footer = () => {
    return (
        <footer className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.{' '}
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Visit our website
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
