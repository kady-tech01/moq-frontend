import React from 'react'
import './About.css';



const About = () => {
  return (
       <div className="page-content" id="about">
    <div className="hero-section">
     <h1>About MoQawill</h1>
     <p>Empowering Future Business Leaders</p>
    </div>
    <div className="content-card">
     <h2>Our Mission</h2>
     <p>MoQawill is committed to creating a dynamic environment where students can develop their business acumen, leadership skills, and entrepreneurial mindset. We believe in the power of collaboration and innovation to shape the future of business.</p>
    </div>
    <div className="content-card">
     <h2>Our Vision</h2>
     <p>To be the leading business club that inspires and equips students with the knowledge, skills, and network necessary to excel in the global business landscape.</p>
    </div>
    <div className="content-card">
     <h2>Technology Stack</h2>
     <p>Our club utilizes modern technologies to deliver exceptional experiences:</p>
     <div className="tech-stack"><span className="tech-badge">HTML</span> <span className="tech-badge">CSS</span> <span className="tech-badge">JavaScript</span> <span className="tech-badge">Bootstrap</span> <span className="tech-badge">React.js</span> <span className="tech-badge">Python</span> <span className="tech-badge">Django</span> <span className="tech-badge">MySQL</span> <span className="tech-badge">DRF</span>
     </div>
    </div>
   </div>
  )
}

export default About