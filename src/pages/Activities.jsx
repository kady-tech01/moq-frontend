import React, { useEffect, useState } from 'react';
import './Activities.css';

// استيراد الصور كـ FALLBACK فقط
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

// Fallback images mapping
const fallbackImages = {
  self1, self2, project1, paradox1, english1,
  alger1, alger2, alger3, photo1, photo2,
  public1, public2, media1, media2
};

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/activities/')
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Using fallback content');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="activities-page">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading activities...</div>
      </div>
    );
  }

  // Use API data if available, otherwise use fallback static data
  const activitiesList = activities.length > 0 ? activities : staticActivities;
  
  // ✅ **ترتيب حسب order - الأعلى رقماً (9) في الأعلى، الأقل (1) في الأسفل**
  const sortedActivities = [...activitiesList].sort((a, b) => b.order - a.order);

  return (
    <div className="activities-page">
      <header className="activities-header">
        <h1>Club Activities</h1>
        <p>A journey of learning, exploring, and building professional skills.</p>
      </header>

      <div className="activities-container">
        {sortedActivities.map((act, index) => (
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
              {act.images && act.images.length > 0 ? (
                act.images.map((img, i) => (
                  <div key={i} className="act-img-wrapper">
                    <img 
                      src={img.image_url || fallbackImages[Object.keys(fallbackImages)[i % Object.keys(fallbackImages).length]]} 
                      alt={`${act.title} ${i}`} 
                      style={act.imgStyles && act.imgStyles[i] ? act.imgStyles[i] : {}}
                      loading="lazy"
                    />
                  </div>
                ))
              ) : (
                // Fallback if no images
                <div className="act-img-wrapper">
                  <img src={project1} alt={act.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Static fallback data (your original activities)
const staticActivities = [
  {
    id: 1,
    order: 1, // ✅ أضف order للـ static activities
    title: "Self Development Workshop",
    trainer: "Salah Eddine Benamar",
    script: "A transformative session focused on personal growth, emotional intelligence, and building the mindset of a leader. Members explored techniques to enhance self-awareness and professional discipline.",
    images: [{ image_url: self1 }, { image_url: self2 }],
    layout: "two-photos",
    imgStyles: [
      { objectFit: 'contain', height: '100%' },
      { objectFit: 'contain', backgroundColor: '#fff', height: '100%' }
    ]
  },
  {
    id: 2,
    order: 2, // ✅ أضف order
    title: "Project Management Workshop",
    trainer: "Faycel Zammour",
    script: "Mastering the art of planning, executing, and monitoring projects. This workshop provided our members with practical tools to manage resources and time effectively in a professional environment.",
    images: [{ image_url: project1 }],
    layout: "circle-photo",
    imgStyles: [{ transform: 'scale(1.3) translateY(5%)' }]
  },
  // ... أضف order لبقية الأنشطة
];

export default Activities;