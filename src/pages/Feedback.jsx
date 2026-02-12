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
  const [errorVisible, setErrorVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccessVisible(true);
        setForm({ name: "", email: "", type: "", message: "" });
        setErrorVisible(false);
        setTimeout(() => setSuccessVisible(false), 5000);
      } else {
        setErrorVisible(true);
        setTimeout(() => setErrorVisible(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-container">
      <form className="feedback-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            type="email" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Feedback Type</label>
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="" disabled>Select a type...</option>
            <option value="General">General</option>
            <option value="Bug">Bug Report</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Compliment">Compliment</option>
            <option value="Complaint">Complaint</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Share your thoughts with us..." 
            rows="5"
            required 
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          <i className="fas fa-paper-plane"></i> 
          {loading ? ' Sending...' : ' Send Feedback'}
        </button>
      </form>

      {successVisible && (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          Thank you! Your feedback has been sent.
        </div>
      )}
      
      {errorVisible && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;