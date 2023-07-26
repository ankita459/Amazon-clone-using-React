import React from 'react';
import './App.css';

const CustomerSupport = () => {
    // Dummy FAQ data for demonstration purposes
    const faqs = [
      {
        id: 1,
        question: 'How can I track my order?',
        answer: 'You can track your order by logging into your account and navigating to the order history.',
      },
      {
        id: 2,
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, MasterCard, American Express, and PayPal.',
      },
      // Add more FAQs as needed
    ];
  
    return (
        <div className="customer-support-container">
      <h2 className="customer-support-heading">Customer Support - FAQs</h2>
      <div className="faqs-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <strong className="faq-question">{faq.question}</strong>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default CustomerSupport;