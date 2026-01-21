import React, { useState } from "react";
import './Feedback.css';

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });

  const [successVisible, setSuccessVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessVisible(true);
    setForm({ name: "", email: "", type: "", message: "" });
    setTimeout(() => setSuccessVisible(false), 5000);
  };

  return (
    <div className="feedback-container">
      <form className="feedback-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" type="email" required />
        </div>

        <div className="form-group">
          <label>Feedback Type</label>
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="" disabled>Select a type...</option>
            <option value="General">General</option>
            <option value="Bug">Bug Report</option>
            <option value="Suggestion">Suggestion</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Share your thoughts with us..." required />
        </div>

        <button type="submit" className="submit-btn">
          <i className="fas fa-paper-plane"></i> Send Feedback
        </button>
      </form>

      {successVisible && <div className="success-message">Thank you! Your feedback has been sent.</div>}
    </div>
  );
};

export default FeedbackForm;