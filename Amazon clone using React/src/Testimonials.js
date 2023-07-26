import React from 'react';
import './App.css';

const Testimonials = () => {
  // Dummy testimonial data for demonstration purposes
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      content: 'The products are amazing! I highly recommend this store.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'I have been a loyal customer for years. Love the quality and service!',
    },
    {
      id: 3,
      name: 'Michael Anderson',
      content: 'The selection is fantastic. I found everything I needed here.',
    },
  ];

  return (
    <div>
      <h2 className="centered-heading">Customer Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-content">{testimonial.content}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;