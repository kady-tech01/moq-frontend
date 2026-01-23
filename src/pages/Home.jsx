import React from "react";


const Home = () => {
  return (
       <div class="page-content active" id="home">
    <div class="hero-section">
     <h1 id="heroTitle">Welcome To MoQawill</h1>
     <p id="heroSubtitle">Learn here, lead anywhere </p>
    </div>
    <div class="content-card">
     <h2>About Our Club :</h2>
     <p>MoQawill Club is a scientific and cultural club affiliated with the Higher School of Management in Tlemcen. Founded in 2020 by official decree No. 01, the club aims to foster the spirit of entrepreneurship, innovation, and scientific research within the field of management sciences.</p>
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
