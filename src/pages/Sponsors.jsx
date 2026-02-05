import React from 'react';
import './Sponsors.css';

// استيراد الصور (تأكدي من تطابق الامتداد .webp أو .png)
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

const Sponsors = () => {
  const sponsorsData = {
    vip: [
      { id: 1, name: "VIP 1", img: vip1, link: "https://www.instagram.com/mansourah.algerie?igsh=MWp3NHprdjBmZWVzNQ==", imgStyle: { transform: 'scale(1.2) translateY(3%)', objectPosition: 'center' } },
      { id: 2, name: "VIP 2", img: vip2, link: "https://www.instagram.com/lexquise_algerie?igsh=MTR3YnM4YW42eHFubA==", imgStyle: { transform: 'scale(1.1) translateY(-2%) ', objectPosition: 'center' } },
    ],
    facebook: [
      { id: 3, name: "FB 1", img: fb1, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 4, name: "FB 2", img: fb2, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 5, name: "FB 3", img: fb3, link: "#", imgStyle: { transform: 'scale(1.1) translateY(4%)', objectPosition: 'center' } },
      { id: 6, name: "FB 4", img: fb4, link: "#", imgStyle: { transform: 'scale(1.0) ', objectPosition: 'center' } },
      { id: 7, name: "FB 5", img: fb5, link: "#", imgStyle: { transform: 'scale(1.0) translateY(-1%)', objectPosition: 'center' } },
      { id: 8, name: "FB 6", img: fb6, link: "#", imgStyle: { transform: 'scale(1.1) translateY(3%)', objectPosition: 'center' } },
      { id: 9, name: "FB 7", img: fb7, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 10, name: "FB 8", img: fb8, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 11, name: "FB 9", img: fb9, link: "#", imgStyle: { transform: 'scale(1.25)', objectFit: 'contain', objectPosition: 'center' } },
      { id: 12, name: "FB 10", img: fb10, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
    ],
    instagram: [
      { id: 13, name: "IG 1", img: ig1, link: "#", imgStyle: { transform: 'scale(1.1) translateX(5%) translateY(2%)', objectPosition: 'center' } },
      { id: 14, name: "IG 2", img: ig2, link: "https://www.instagram.com/monde_du_sucre1300?igsh=MXRyb2k5ZmxkdXIwZA==", imgStyle: { transform: 'scale(1.1) translateX(2%) translateY(3%)', objectPosition: 'center' } },
      { id: 15, name: "IG 3", img: ig3, link: "https://www.instagram.com/dalinova13?igsh=a2JybjE1ODNsemhh", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 16, name: "IG 4", img: ig4, link: "https://www.instagram.com/arabasta.13?igsh=MXAxM3gzMGRzd3Rs", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 17, name: "IG 5", img: ig5, link: "https://www.instagram.com/bouquet_de_fleur_au_chocolat_?igsh=MXUwd2pybGx1bWp0ag==", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 18, name: "IG 6", img: ig6, link: "https://www.instagram.com/bissenparfum?igsh=cnExZ3hnOWc4Njlo", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 19, name: "IG 7", img: ig7, link: "https://www.instagram.com/delicesbysisters_?igsh=dGFka29lMWZkbmN0", imgStyle: { transform: 'scale(1.0) ', objectPosition: 'center' } },
      { id: 20, name: "IG 8", img: ig8, link: "https://www.instagram.com/lebonchoix_chezghania?igsh=MmgweGN0a3h4emtw", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 21, name: "IG 9", img: ig9, link: "#", imgStyle: { transform: 'scale(1.0)', objectPosition: 'center' } },
      { id: 22, name: "IG 10", img: ig10, link: "https://www.instagram.com/narcisia?igsh=NWt6ODMzdDltOGE4", imgStyle: { transform: 'scale(1.3) translateY(1%)', objectPosition: 'center' } },
      { id: 23, name: "IG 11", img: ig11, link: "https://www.instagram.com/chocolat_by_s?igsh=eXc3ZGFnaGltcmJ3", imgStyle: { transform: 'scale(1.0)  translateY(3%)', objectPosition: 'center' } },
    ]
  };

  const RenderSponsorGrid = ({ title, data, typeClass }) => (
    <section className={`sponsor-section ${typeClass}`}>
      <div className="section-header">
        <div className="line"></div>
        <h2>{title}</h2>
        <div className="line"></div>
      </div>
      <div className="sponsors-grid">
        {data.map(item => (
          <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="sponsor-card">
            <div className="image-container">
              <img src={item.img} alt={item.name} style={item.imgStyle} />
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

        <RenderSponsorGrid title="VIP Platinum" data={sponsorsData.vip} typeClass="vip-tier" />
        <RenderSponsorGrid title="Facebook Media" data={sponsorsData.facebook} typeClass="fb-tier" />
        <RenderSponsorGrid title="Instagram Network" data={sponsorsData.instagram} typeClass="ig-tier" />
      </div>
    </div>
  );
};

export default Sponsors;