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
      trainer: "Salah Eddine Benamar",
      script: "A transformative session focused on personal growth, emotional intelligence, and building the mindset of a leader. Members explored techniques to enhance self-awareness and professional discipline.",
      images: [self1, self2],
      layout: "two-photos", 
      imgStyles: [
        { objectFit: 'contain', height: '100%' }, 
        { objectFit: 'contain', backgroundColor: '#fff', height: '100%' }
      ]
    },
    {
      id: 2,
      title: "Project Management Workshop",
      trainer: "Faycel Zammour",
      script: "Mastering the art of planning, executing, and monitoring projects. This workshop provided our members with practical tools to manage resources and time effectively in a professional environment.",
      images: [project1],
      layout: "circle-photo",
      imgStyles: [{ transform: 'scale(1.3) translateY(5%)' }]
    },
    {
      id: 3,
      title: "Paradox of Choice",
      trainer: "Ali Charif Bensalm",
      script: "A deep dive into decision-making psychology. This session analyzed how having too many options can lead to anxiety and paralysis, providing strategies to make more confident and efficient choices.",
      images: [paradox1],
      layout: "one-photo",
      imgStyles: [{ transform: 'scale(1.1)' }]
    },
    {
      id: 4,
      title: "English Workshop",
      trainer: "Club Academic Team",
      script: "An intensive session designed to boost the communication skills of our members. Focus was placed on business English vocabulary and public presentation techniques in a global context.",
      images: [english1],
      layout: "one-photo",
      imgStyles: [{ transform: 'scale(1.05)' }]
    },
    {
      id: 5,
      title: "Algiers Trip: SILA Book Expo",
      trainer: null,
      script: "A cultural journey to the International Book Fair (SILA) in Algiers. Members expanded their horizons, explored the latest business and management literature, and engaged with global publishers.",
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
      trainer: "C. Chihab Eddine",
      script: "Learning the fundamentals of lighting, composition, and visual storytelling. This hands-on session helped members capture the club's essence through the lens of a professional camera.",
      images: [photo1, photo2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1.1)' }, { transform: 'scale(1) '  }]
    },
    {
      id: 7,
      title: "Public Speaking Workshop",
      trainer: "Benhamed Nadir",
      script: "Conquering the stage! This workshop focused on body language, vocal variety, and overcoming stage fright, allowing members to practice delivering powerful and persuasive speeches.",
      images: [public1, public2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1)' }, { transform: 'scale(1)' }]
    },
    {
      id: 8,
      title: "Content Creation Workshop", // تم تغيير الاسم هنا
      trainer: "Laouari Soheib",
      script: "A hands-on workshop covering digital content creation, storytelling, and social media branding. Members learned how to craft engaging visuals and narratives for the digital age.",
      images: [media1, media2],
      layout: "two-photos",
      imgStyles: [{ transform: 'scale(1)' }, { transform: 'scale(1)' }]
    }
  ];

  // عكس الترتيب لعرض الأحدث أولاً
  const reversedActivities = [...activitiesList].reverse();

  return (
    <div className="activities-page">
      <header className="activities-header">
        <h1>Club Activities</h1>
        <p>A journey of learning, exploring, and building professional skills.</p>
      </header>

      <div className="activities-container">
        {reversedActivities.map((act, index) => (
          <div key={act.id} className={`activity-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="activity-info">
              <h2>{act.title}</h2>
              {act.trainer && (
                <div className="trainer-tag">
                  <i className="fas fa-user-tie"></i> Trainer: <strong>{act.trainer}</strong>
                </div>
              )}
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
                    loading="lazy"
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