import React, { useEffect, useState } from 'react';
import './anouncements.css';

const Announces = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/announces/')
      .then(res => res.json())
      .then(data => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error fetching announcements:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-content active" id="announcements">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading announcements...</div>
      </div>
    );
  }

  const activeAnnouncements = announcements.filter(item => item.status === 'active');
  const archivedAnnouncements = announcements.filter(item => item.status === 'archive');

  return (
    <div className="page-content active" id="announcements">
      <div className="announcements-header">
        <h1>Official Announcements</h1>
        <p>Stay updated with the latest formal notices from the Executive Board.</p>
      </div>

      <div className="announcements-list">
        
        {/* Active Announcements */}
        {activeAnnouncements.length > 0 && (
          <>
            <h2 className="section-subtitle">Current Announcements</h2>
            {activeAnnouncements.map((item) => (
              <div key={item.id} className="announcement-card active">
                <div className="announcement-meta">
                  <span className="announcement-type">{item.type}</span>
                  <span className="announcement-date">{item.date_display || item.date}</span>
                </div>
                <div className="announcement-body">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  {item.link && (
                    <a href={item.link} className="announcement-link">
                      {item.link_text || 'Take Action →'}
                    </a>
                  )}
                </div>
                <div className="status-badge active">
                  Active
                </div>
              </div>
            ))}
          </>
        )}

        {/* Archived Announcements */}
        {archivedAnnouncements.length > 0 && (
          <>
            <h2 className="section-subtitle archive-title">Archive</h2>
            {archivedAnnouncements.map((item) => (
              <div key={item.id} className="announcement-card archive">
                <div className="announcement-meta">
                  <span className="announcement-type">{item.type}</span>
                  <span className="announcement-date">{item.date_display || item.date}</span>
                </div>
                <div className="announcement-body">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="status-badge archive">
                  Archive
                </div>
              </div>
            ))}
          </>
        )}

        {/* No Announcements */}
        {announcements.length === 0 && (
          <div className="no-announcements">
            <p>No announcements at this time.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Announces;