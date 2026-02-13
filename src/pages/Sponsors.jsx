import React, { useEffect, useState } from 'react';
import './Sponsors.css';

// استيراد الصور القديمة كـ FALLBACK فقط
import vip1 from '../assets/sponsors/vip1.webp';
import vip2 from '../assets/sponsors/vip2.webp';
import fb1 from '../assets/sponsors/fb1.webp';
import fb2 from '../assets/sponsors/fb2.webp';
import fb3 from '../assets/sponsors/fb3.webp';
import fb4 from '../assets/sponsors/fb4.webp';
import fb5 from '../assets/sponsors/fb5.webp';
import fb6 from '../assets/sponsors/fb6.webp';
import fb7 from '../assets/sponsors/fb7.webp';
import fb8 from '../assets/sponsors/fb8.webp';
import fb9 from '../assets/sponsors/fb9.webp';
import fb10 from '../assets/sponsors/fb10.webp';
import ig1 from '../assets/sponsors/ig1.webp';
import ig2 from '../assets/sponsors/ig2.webp';
import ig3 from '../assets/sponsors/ig3.webp';
import ig4 from '../assets/sponsors/ig4.webp';
import ig5 from '../assets/sponsors/ig5.webp';
import ig6 from '../assets/sponsors/ig6.webp';
import ig7 from '../assets/sponsors/ig7.webp';
import ig8 from '../assets/sponsors/ig8.webp';
import ig9 from '../assets/sponsors/ig9.webp';
import ig10 from '../assets/sponsors/ig10.webp';
import ig11 from '../assets/sponsors/ig11.webp';

// Fallback images mapping
const fallbackImages = {
  vip1, vip2,
  fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10,
  ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9, ig10, ig11
};

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://moq-jbco.onrender.com/api/sponsors/')
      .then(res => res.json())
      .then(data => {
        setSponsors(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Using fallback content');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="sponsors-page">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading sponsors...</div>
      </div>
    );
  }

  // Use API data if available, otherwise use fallback static data
  const sponsorsList = sponsors.length > 0 ? sponsors : staticSponsors;

  // تجميع الرعاة حسب النوع
  const groupedSponsors = {
    vip: sponsorsList.filter(s => s.type === 'vip'),
    facebook: sponsorsList.filter(s => s.type === 'facebook'),
    instagram: sponsorsList.filter(s => s.type === 'instagram'),
  };

  // ترتيب كل مجموعة حسب order - الأعلى رقماً في الأعلى
  groupedSponsors.vip.sort((a, b) => b.order - a.order);
  groupedSponsors.facebook.sort((a, b) => b.order - a.order);
  groupedSponsors.instagram.sort((a, b) => b.order - a.order);

  const RenderSponsorGrid = ({ title, data, typeClass }) => (
    <section className={`sponsor-section ${typeClass}`}>
      <div className="section-header">
        <div className="line"></div>
        <h2>{title}</h2>
        <div className="line"></div>
      </div>
      <div className="sponsors-grid">
        {data.map(item => (
          <a 
            key={item.id} 
            href={item.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sponsor-card"
          >
            <div className="image-container">
              <img 
                src={item.image_url || fallbackImages[`${item.type}${item.id}`] || vip1} 
                alt={item.name} 
                style={item.imgStyle || { transform: 'scale(1.0)', objectPosition: 'center' }}
              />
            </div>
            <div className="card-overlay">
              <span>Visit Page</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <div className="sponsors-page">
      <div className="sponsors-hero">
        <h1>Sponsors</h1>
        <p>Collaboration is the heart of our success.</p>
        <div className="hero-divider"></div>
      </div>

      <div className="container">
        {/* العنوان الفرعي فوق قسم الـ VIP Platinum مباشرة */}
        <div className="event-main-title">
            <h3>Blue November's Sponsors</h3>
        </div>

        {groupedSponsors.vip.length > 0 && (
          <RenderSponsorGrid title="VIP Platinum" data={groupedSponsors.vip} typeClass="vip-tier" />
        )}
        
        {groupedSponsors.facebook.length > 0 && (
          <RenderSponsorGrid title="Facebook Media" data={groupedSponsors.facebook} typeClass="fb-tier" />
        )}
        
        {groupedSponsors.instagram.length > 0 && (
          <RenderSponsorGrid title="Instagram Network" data={groupedSponsors.instagram} typeClass="ig-tier" />
        )}
      </div>
    </div>
  );
};

// Static fallback data - your original sponsors with order
const staticSponsors = [
  // VIP
  { id: 1, name: "VIP 1", type: 'vip', link: "https://www.instagram.com/mansourah.algerie?igsh=MWp3NHprdjBmZWVzNQ==", order: 2, 
    image_url: vip1, imgStyle: { transform: 'scale(1.2) translateY(3%)', objectPosition: 'center' } },
  { id: 2, name: "VIP 2", type: 'vip', link: "https://www.instagram.com/lexquise_algerie?igsh=MTR3YnM4YW42eHFubA==", order: 1,
    image_url: vip2, imgStyle: { transform: 'scale(1.1) translateY(-2%)', objectPosition: 'center' } },
  
  // Facebook
  { id: 3, name: "FB 1", type: 'facebook', link: "#", order: 10,
    image_url: fb1, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 4, name: "FB 2", type: 'facebook', link: "#", order: 9,
    image_url: fb2, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 5, name: "FB 3", type: 'facebook', link: "#", order: 8,
    image_url: fb3, imgStyle: { transform: 'scale(1.1) translateY(4%)', objectPosition: 'center' } },
  { id: 6, name: "FB 4", type: 'facebook', link: "#", order: 7,
    image_url: fb4, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 7, name: "FB 5", type: 'facebook', link: "#", order: 6,
    image_url: fb5, imgStyle: { transform: 'scale(1.0) translateY(-1%)', objectPosition: 'center' } },
  { id: 8, name: "FB 6", type: 'facebook', link: "#", order: 5,
    image_url: fb6, imgStyle: { transform: 'scale(1.1) translateY(3%)', objectPosition: 'center' } },
  { id: 9, name: "FB 7", type: 'facebook', link: "#", order: 4,
    image_url: fb7, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 10, name: "FB 8", type: 'facebook', link: "#", order: 3,
    image_url: fb8, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 11, name: "FB 9", type: 'facebook', link: "#", order: 2,
    image_url: fb9, imgStyle: { transform: 'scale(1.25)', objectFit: 'contain', objectPosition: 'center' } },
  { id: 12, name: "FB 10", type: 'facebook', link: "#", order: 1,
    image_url: fb10, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  
  // Instagram
  { id: 13, name: "IG 1", type: 'instagram', link: "#", order: 11,
    image_url: ig1, imgStyle: { transform: 'scale(1.1) translateX(5%) translateY(2%)', objectPosition: 'center' } },
  { id: 14, name: "IG 2", type: 'instagram', link: "https://www.instagram.com/monde_du_sucre1300?igsh=MXRyb2k5ZmxkdXIwZA==", order: 10,
    image_url: ig2, imgStyle: { transform: 'scale(1.1) translateX(2%) translateY(3%)', objectPosition: 'center' } },
  { id: 15, name: "IG 3", type: 'instagram', link: "https://www.instagram.com/dalinova13?igsh=a2JybjE1ODNsemhh", order: 9,
    image_url: ig3, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 16, name: "IG 4", type: 'instagram', link: "https://www.instagram.com/arabasta.13?igsh=MXAxM3gzMGRzd3Rs", order: 8,
    image_url: ig4, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 17, name: "IG 5", type: 'instagram', link: "https://www.instagram.com/bouquet_de_fleur_au_chocolat_?igsh=MXUwd2pybGx1bWp0ag==", order: 7,
    image_url: ig5, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 18, name: "IG 6", type: 'instagram', link: "https://www.instagram.com/bissenparfum?igsh=cnExZ3hnOWc4Njlo", order: 6,
    image_url: ig6, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 19, name: "IG 7", type: 'instagram', link: "https://www.instagram.com/delicesbysisters_?igsh=dGFka29lMWZkbmN0", order: 5,
    image_url: ig7, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 20, name: "IG 8", type: 'instagram', link: "https://www.instagram.com/lebonchoix_chezghania?igsh=MmgweGN0a3h4emtw", order: 4,
    image_url: ig8, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 21, name: "IG 9", type: 'instagram', link: "#", order: 3,
    image_url: ig9, imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
  { id: 22, name: "IG 10", type: 'instagram', link: "https://www.instagram.com/narcisia?igsh=NWt6ODMzdDltOGE4", order: 2,
    image_url: ig10, imgStyle: { transform: 'scale(1.3) translateY(1%)', objectPosition: 'center' } },
  { id: 23, name: "IG 11", type: 'instagram', link: "https://www.instagram.com/chocolat_by_s?igsh=eXc3ZGFnaGltcmJ3", order: 1,
    image_url: ig11, imgStyle: { transform: 'scale(1.0) translateY(3%)', objectPosition: 'center' } },
];

export default Sponsors;