import React from 'react';
import './Anouncements.css';

const Announces = () => {
  const announces = [
    {
      id: 1,
      type: 'Recruitment',
      title: 'Spring 2026 Membership Intake',
      date: 'Jan 25, 2026',
      status: 'Active',
      content: 'We are looking for ambitious students to join our HR and Design departments. Apply before Feb 1st.',
      link: '#',
    },
    {
      id: 2,
      type: 'Event',
      title: 'Management Days Workshop Registration',
      date: 'Jan 20, 2026',
      status: 'Active',
      content: 'Registration is now open for the Scientific Activities seminar. Limited seats available.',
      link: '#',
    },
    {
      id: 3,
      type: 'Policy',
      title: 'New Internal Regulation Decree',
      date: 'Jan 10, 2026',
      status: 'Archive',
      content: 'The Executive Board has updated the attendance policy for weekly workshops.',
      link: '#',
    }
  ];

  return (
    <div className="page-content active" id="announcements">
      <div className="announcements-header">
        <h1>Official Announcements</h1>
        <p>Stay updated with the latest formal notices from the Executive Board.</p>
      </div>

      <div className="announcements-list">
        {announces.map((item) => (
          <div key={item.id} className={`announcement-card ${item.status.toLowerCase()}`}>
            <div className="announcement-meta">
              <span className="announcement-type">{item.type}</span>
              <span className="announcement-date">{item.date}</span>
            </div>
            <div className="announcement-body">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              {item.status === 'Active' && (
                <a href={item.link} className="announcement-link">Take Action →</a>
              )}
            </div>
            <div className={`status-badge ${item.status.toLowerCase()}`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announces;