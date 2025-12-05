import React from "react";


const Home = () => {
  return (
       <div class="page-content active" id="home">
    <div class="hero-section">
     <h1 id="heroTitle">Welcome to MoQawill</h1>
     <p id="heroSubtitle">Business Club of Excellence</p>
    </div>
    <div class="content-card">
     <h2>About Our Club</h2>
     <p>MoQawill is the premier business club at our university, dedicated to fostering entrepreneurship, leadership, and professional development among students. We provide a platform for aspiring business leaders to connect, learn, and grow together.</p>
    </div>
    <div class="feature-grid">
     <div class="feature-item"><i class="fas fa-users"></i>
      <h3>Community</h3>
      <p>Join a vibrant community of business enthusiasts and future entrepreneurs</p>
     </div>
     <div class="feature-item"><i class="fas fa-lightbulb"></i>
      <h3>Innovation</h3>
      <p>Explore innovative ideas and turn them into successful business ventures</p>
     </div>
     <div class="feature-item"><i class="fas fa-chart-line"></i>
      <h3>Growth</h3>
      <p>Develop your skills through workshops, seminars, and networking events</p>
     </div>
    </div>
   </div>
  );
};

export default Home;
