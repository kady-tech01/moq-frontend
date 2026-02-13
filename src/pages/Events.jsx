import React, { useEffect, useState } from 'react';
import './Events.css';

// استيراد الصور كـ FALLBACK فقط
import blue1 from '../assets/events/blue1.webp';
import blue2 from '../assets/events/blue2.webp';
import blue3 from '../assets/events/blue3.webp';
import blue4 from '../assets/events/blue4.webp';
import open1 from '../assets/events/open1.webp';
import open2 from '../assets/events/open2.webp';
import scieno1 from '../assets/events/scieno1.webp';
import cine1 from '../assets/events/cine1.webp';
import women1 from '../assets/events/women1.webp';
import women2 from '../assets/events/women2.webp';
import women3 from '../assets/events/women3.webp';
import yan1 from '../assets/events/yan1.webp';
import yan2 from '../assets/events/yan2.webp';
import yan3 from '../assets/events/yan3.webp';

// Fallback images mapping
const fallbackImages = {
  blue1, blue2, blue3, blue4, open1, open2,
  scieno1, cine1, women1, women2, women3,
  yan1, yan2, yan3
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://moq-jbco.onrender.com/api/events/')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Using fallback content');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="events-page">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading events...</div>
      </div>
    );
  }

  // Use API data if available, otherwise use fallback static data
  const eventsList = events.length > 0 ? events : staticEvents;
  
  // ترتيب حسب order - الأعلى رقماً في الأعلى
  const sortedEvents = [...eventsList].sort((a, b) => b.order - a.order);

  return (
    <div className="events-page">
      <header className="events-header">
        <div className="header-glow"></div>
        <h1>Our Memorable Events</h1>
        <div className="title-underline"></div>
        <p>A journey through the highlights and milestones of our club.</p>
      </header>

      <div className="events-timeline">
        {sortedEvents.map((event, index) => (
          <section key={event.id} className={`event-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="event-info">
              <span className="event-date">{event.date}</span>
              <h2>{event.title}</h2>
              <div className="info-divider"></div>
              <p>{event.script}</p>
            </div>

            {/* إضافة كلاس img-count-X للتحكم في الحجم */}
            <div className={`event-gallery img-count-${event.image_count || event.images?.length || 1}`}>
              {event.images && event.images.length > 0 ? (
                event.images.map((img, i) => (
                  <div key={i} className="event-img-wrapper">
                    <img 
                      src={img.image_url || fallbackImages[Object.keys(fallbackImages)[i % Object.keys(fallbackImages).length]]} 
                      alt={`${event.title} ${i}`} 
                      loading="lazy" 
                    />
                  </div>
                ))
              ) : (
                // Fallback if no images
                <div className="event-img-wrapper">
                  <img src={blue1} alt={event.title} loading="lazy" />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

// Static fallback data (your original events)
const staticEvents = [
  {
    id: 1,
    order: 6,
    title: "Blue November",
    date: "November",
    script: "Raising awareness about men's health. A month-long campaign filled with men's health awareness, medical check-ups, and informative sessions to promote a healthier lifestyle.",
    images: [{ image_url: blue1 }, { image_url: blue2 }, { image_url: blue3 }, { image_url: blue4 }],
    image_count: 4
  },
  {
    id: 2,
    order: 5,
    title: "Open Day",
    date: "Orientation Period",
    script: "Welcoming the new generation of ESM students! We showcase our club's values, diverse departments, and the exciting journey that awaits our future members.",
    images: [{ image_url: open1 }, { image_url: open2 }],
    image_count: 2
  },
  {
    id: 3,
    order: 4,
    title: "Scienofia",
    date: "Annual Event",
    script: "Where science meets curiosity. An interactive event dedicated to exploring scientific wonders through live experiments, intellectual games, and engaging presentations.",
    images: [{ image_url: scieno1 }],
    image_count: 1
  },
  {
    id: 4,
    order: 3,
    title: "CineVibes",
    date: "Periodic",
    script: "Our signature movie night. A gathering for film enthusiasts to watch, analyze, and discuss masterpieces of cinema in a cozy and artistic atmosphere.",
    images: [{ image_url: cine1 }],
    image_count: 1
  },
  {
    id: 5,
    order: 2,
    title: "International Women's Day",
    date: "March 08",
    script: "A special tribute to the achievements of women. Featuring inspirational talks, creative workshops, and honoring the female leaders within our university.",
    images: [{ image_url: women1 }, { image_url: women2 }, { image_url: women3 }],
    image_count: 3
  },
  {
    id: 6,
    order: 1,
    title: "Yennayer Celebration (يناير)",
    date: "January 12",
    script: "Celebrating our rich Amazigh heritage. The event features traditional costumes, authentic food, and cultural activities that bring the ESM community together.",
    images: [{ image_url: yan1 }, { image_url: yan2 }, { image_url: yan3 }],
    image_count: 3
  }
];

export default Events;