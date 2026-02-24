import React, { useState } from "react";
import { useMutation } from '@tanstack/react-query';
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

  // دالة إرسال الفيدباك
  const submitFeedback = async (feedbackData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }

    return response.json();
  };

  // استخدام useMutation من TanStack Query
  const mutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      setSuccessVisible(true);
      setForm({ name: "", email: "", type: "", message: "" });
      setErrorVisible(false);
      setTimeout(() => setSuccessVisible(false), 5000);
    },
    onError: (error) => {
      console.error('Error:', error);
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(form);
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
          />
        </div>

        <div className="form-group">
          <label>Feedback Type</label>
          <select 
            name="type" 
            value={form.type} 
            onChange={handleChange} 
            required
            disabled={mutation.isPending}
          >
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
            disabled={mutation.isPending}
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={mutation.isPending}
        >
          <i className="fas fa-paper-plane"></i> 
          {mutation.isPending ? ' Sending...' : ' Send Feedback'}
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