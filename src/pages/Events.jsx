import React from 'react';
import './Events.css';

// استيراد الصور (تأكدي من تطابق المسارات في مجلد assets)
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

const Events = () => {
  const eventsList = [
    {
      id: 1,
      title: "Blue November",
      date: "November",
      script: "Raising awareness about men's health and diabetes. A month-long campaign filled with sports activities, medical check-ups, and informative sessions to promote a healthier lifestyle.",
      images: [blue1, blue2, blue3, blue4],
    },
    {
      id: 2,
      title: "Open Day",
      date: "Orientation Period",
      script: "Welcoming the new generation of ESM students! We showcase our club's values, diverse departments, and the exciting journey that awaits our future members.",
      images: [open1, open2],
    },
    {
      id: 3,
      title: "Scienofia",
      date: "Annual Event",
      script: "Where science meets curiosity. An interactive event dedicated to exploring scientific wonders through live experiments, intellectual games, and engaging presentations.",
      images: [scieno1],
    },
    {
      id: 4,
      title: "CineVibes",
      date: "Periodic",
      script: "Our signature movie night. A gathering for film enthusiasts to watch, analyze, and discuss masterpieces of cinema in a cozy and artistic atmosphere.",
      images: [cine1],
    },
    {
      id: 5,
      title: "International Women's Day",
      date: "March 08",
      script: "A special tribute to the achievements of women. Featuring inspirational talks, creative workshops, and honoring the female leaders within our university.",
      images: [women1, women2, women3],
    },
    {
      id: 6,
      title: "Yennayer Celebration (يناير)",
      date: "January 12",
      script: "Celebrating our rich Amazigh heritage. The event features traditional costumes, authentic food, and cultural activities that bring the ESM community together.",
      images: [yan1, yan2, yan3],
    }
  ];

  return (
    <div className="events-page">
      <header className="events-header">
        <div className="header-glow"></div>
        <h1>Our Memorable Events</h1>
        <div className="title-underline"></div>
        <p>A journey through the highlights and milestones of our club.</p>
      </header>

      <div className="events-timeline">
        {eventsList.map((event, index) => (
          <section key={event.id} className={`event-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            {/* الجزء الخاص بالنص */}
            <div className="event-info">
              <span className="event-date">{event.date}</span>
              <h2>{event.title}</h2>
              <div className="info-divider"></div>
              <p>{event.script}</p>
            </div>

            {/* الجزء الخاص بالصور بتنسيق شبكي ذكي */}
            <div className={`event-gallery img-count-${event.images.length}`}>
              {event.images.map((img, i) => (
                <div key={i} className="event-img-wrapper">
                  <img src={img} alt={`${event.title} ${i}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Events;