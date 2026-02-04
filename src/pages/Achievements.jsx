import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsList = [
    {
      id: 1,
      title: 'Global Entrepreneurship Week',
      arabicTitle: 'الأسبوع العالمي للمقاولاتية',
      category: 'Entrepreneurship',
      description: 'A global celebration of innovators who dream big and launch startups.',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Alger Book Expo (SILA)',
      arabicTitle: 'صالون الجزائر الدولي للكتاب',
      category: 'Culture',
      description: 'Active participation in promoting scientific research and business literature.',
      icon: '📚'
    },
    {
      id: 3,
      title: 'November Blue',
      arabicTitle: 'نوفمبر الأزرق',
      category: 'Health',
      description: 'Awareness campaign for prostate cancer and men\'s health issues.',
      icon: '👔'
    },
    {
      id: 4,
      title: 'Pink October',
      arabicTitle: 'أكتوبر الوردي',
      category: 'Health',
      description: 'Spreading awareness about breast cancer early detection.',
      icon: '🎀'
    },
    {
      id: 5,
      title: 'Youm El Chahid',
      arabicTitle: 'يوم الشهيد',
      category: 'National',
      description: 'Honoring the heroes of Algeria and reviving our national memory.',
      icon: '🇩🇿'
    },
    {
      id: 6,
      title: 'Scienofia Event',
      arabicTitle: 'فعالية Scienofia',
      category: 'Scientific',
      description: 'A unique cultural and scientific competition for ESM students.',
      icon: '🧪'
    },
    {
      id: 7,
      title: 'National Science Day',
      arabicTitle: 'اليوم الوطني للعلم',
      category: 'Education',
      description: 'Commemorating the legacy of knowledge and enlightenment in Algeria.',
      icon: '📖'
    },
    {
      id: 8,
      title: 'International Women\'s Day',
      arabicTitle: 'اليوم العالمي للمرأة',
      category: 'Social',
      description: 'Celebrating the achievements and leadership of women in business.',
      icon: '✨'
    }
  ];

  return (
    <div className="page-content active" id="achievements">
      <div className="achievements-hero">
        <span className="gold-text">Our Legacy & Events</span>
        <h1>Impactful Milestones</h1>
        <p>From national pride to global awareness, MoQawill leaves its mark everywhere.</p>
      </div>

      <div className="achievements-container">
        <div className="achievements-grid">
          {achievementsList.map((item) => (
            <div key={item.id} className="achievement-card">
              <div className="card-header">
                <span className="item-icon">{item.icon}</span>
                <span className="category-pill">{item.category}</span>
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <h4 className="arabic-title">{item.arabicTitle}</h4>
                <p>{item.description}</p>
              </div>
              <div className="hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;