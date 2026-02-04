import React from 'react';
import './Activities.css';

// استيراد الصور
import self1 from '../assets/activities/self1.webp';
import self2 from '../assets/activities/self2.webp';
import project1 from '../assets/activities/project1.webp';
import paradox1 from '../assets/activities/paradox1.webp';
import english1 from '../assets/activities/english1.webp';
import alger1 from '../assets/activities/alger1.webp';
import alger2 from '../assets/activities/alger2.webp';
import alger3 from '../assets/activities/alger3.webp';
import photo1 from '../assets/activities/photo1.webp';
import photo2 from '../assets/activities/photo2.webp';
import public1 from '../assets/activities/public1.webp';
import public2 from '../assets/activities/public2.webp';
import media1 from '../assets/activities/media1.webp';
import media2 from '../assets/activities/media2.webp';

const Activities = () => {
  const activitiesList = [
    {
      id: 1,
      title: "Self Development Workshop",
      script: "A transformative session focused on personal growth...",
      images: [self1, self2],
      layout: "two-photos", 
      imgStyles: [
        { objectFit: 'contain', height: '100%' }, 
        { objectFit: 'contain', backgroundColor: '#fff', height: '100%' }
      ]
    },
    {
      id: 2,
      title: "Project Management",
      script: "Mastering the art of planning...",
      images: [project1],
      layout: "circle-photo",
      imgStyles: [{ transform: 'scale(1.3) translateY(5%)' }]
    },
    {
      id: 3,
      title: "Paradox of Choice",
      script: "A deep dive into decision-making psychology...",
      images: [paradox1],
      layout: "one-photo",
      imgStyles: [{ transform: 'scale(1.1)' }]
    },
    {
      id: 4,
      title: "English Workshop",
      script: "An intensive session for club members...",
      images: [english1],
      layout: "one-photo",
      imgStyles: [{ transform: 'scale(1.05)' }]
    },
    {
      id: 5,
      title: "Algiers Trip: SILA Book Expo",
      script: "A cultural journey to the International Book Fair...",
      images: [alger1, alger2, alger3],
      layout: "three-photos",
      imgStyles: [
        { transform: 'scale(1.1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1.1)' }
      ]
    },
    {
      id: 6,
      title: "Photography Open Workshop",
      script: "Learning the fundamentals of lighting...",
      images: [photo1, photo2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1.1)' }, { transform: 'scale(1) '  }]
    },
    {
      id: 7,
      title: "Public Speaking Workshop",
      script: "Conquering the stage! Members practiced...",
      images: [public1, public2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1)' }, { transform: 'scale(1)' }]
    },
    {
      id: 8,
      title: "Media Workshop",
      script: "A hands-on workshop covering digital content creation...",
      images: [media1, media2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1)' }, { transform: 'scale(1)' }]
    }
  ];

  // عكس ترتيب المصفوفة لعرض الأحدث أولاً
  const reversedActivities = [...activitiesList].reverse();

  return (
    <div className="activities-page">
      <header className="activities-header">
        <h1>Club Activities</h1>
        <p>A journey of learning, exploring, and building professional skills.</p>
      </header>

      <div className="activities-container">
        {reversedActivities.map((act, index) => (
          /* نستخدم index الجديد لضمان بقاء التبادل البصري (يسار/يمين) منتظماً */
          <div key={act.id} className={`activity-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="activity-info">
              <h2>{act.title}</h2>
              <div className="act-line"></div>
              <p>{act.script}</p>
            </div>
            
            <div className={`activity-gallery ${act.layout}`}>
              {act.images.map((img, i) => (
                <div key={i} className="act-img-wrapper">
                  <img 
                    src={img} 
                    alt={`${act.title} ${i}`} 
                    style={act.imgStyles && act.imgStyles[i] ? act.imgStyles[i] : {}}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;