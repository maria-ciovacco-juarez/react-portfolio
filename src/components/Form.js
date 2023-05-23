import React from 'react';
import './FormStyles.css';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
