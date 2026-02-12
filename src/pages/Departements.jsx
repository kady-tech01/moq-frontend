import React from 'react';
import './Departements.css';

import hrImg from '../assets/departements/RH.webp';
import erImg from '../assets/departements/RE.webp';
import orgImg from '../assets/departements/organization.webp';
import planImg from '../assets/departements/planification.webp';
import mediaImg from '../assets/departements/media.webp';
import designImg from '../assets/departements/design.webp';
import scientificImg from '../assets/departements/activities.webp';

const Departements = () => {
  const departmentsData = [
    {
      id: 5,
      name: "Media",
      leader: "Rima Hicher",
      description: "Documenting our journey through professional photography and social media management.",
      image: mediaImg,
      imgStyle: {transform: 'scale(1.1) translateX(3%)' }
    },
    {
      id: 6,
      name: "Design",
      leader: "Kaltoum Nour",
      description: "Crafting the visual identity of MoQawill through creative posters and branding.",
      image: designImg,
      imgStyle: {}
    },
    {
      id: 1,
      name: "Human Resources (HR)",
      leader: "Houda Zaidi",
      description: "Managing club members, recruitment strategy, and fostering a productive internal environment.",
      image: hrImg,
      imgStyle: { transform: 'scale(2) translateX(4%)' }
    },
    {
      id: 2,
      name: "External Relations",
      leader: "Inchirah Habbib Zahmani",
      description: "Building bridges with partners, sponsors, and maintaining professional relationships.",
      image: erImg,
      imgStyle: { objectPosition: 'center 10%' }
    },
    {
      id: 3,
      name: "Organization",
      leader: "Hania Chihane",
      description: "The logistics engine. Planning and executing the physical setup of all events.",
      image: orgImg,
      imgStyle: {transform: 'scale(1.2) translateX(3%)'} 
    },
    {
      id: 7,
      name: "Scientific & Cultural Activities",
      leader: "Samah Chergui",
      description: "Focusing on academic growth, research workshops, and enriching cultural life.",
      image: scientificImg,
      imgStyle: { transform: 'scale(1.9) translateX(-3%) translateY(-2%)' }
    },
    {
      id: 4,
      name: "Planification",
      leader: "Nour El-Houda Khadidja Nadour",
      description: "Strategic roadmapping and monitoring the club’s long-term goals.",
      image: planImg,
      imgStyle: { transform: 'scale(2) translateX(5%)' }
    }
  ];

  return (
    <div className="page-content active" id="departments">
      <div className="dept-header">
        <h1>Our Departments</h1>
        <p>Expert leadership driving excellence in every specialized division.</p>
      </div>

      <div className="dept-container-vertical">
        {departmentsData.map((dept) => (
          <div key={dept.id} className="dept-row">
            <div className="leader-circle-large">
              <img 
                src={dept.image} 
                alt={dept.leader} 
                style={dept.imgStyle} 
                loading="lazy"
              />
            </div>
            <div className="dept-details-full">
              <span className="leader-title">Department Head</span>
              <h3 className="leader-name-h3">{dept.leader}</h3>
              <h2 className="dept-name-h2">{dept.name}</h2>
              <div className="dept-accent-line"></div>
              <p className="dept-full-desc">{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departements;