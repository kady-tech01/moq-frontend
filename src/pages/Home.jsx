import React from "react";
import { useQuery } from '@tanstack/react-query';
import "./Home.css"; 

// استيراد الصور بصيغة WebP - FALLBACK ONLY
import collectiveHero from "../assets/home/collectiveHero.webp";
import logo from "../assets/styles/logo.webp"; // استيراد شعار النادي

// دالة جلب البيانات من API
const fetchHomeData = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/home/`);
  if (!response.ok) {
    throw new Error('Failed to fetch home data');
  }
  return response.json();
};

const Home = () => {
  // استخدام TanStack Query
  const { 
    data: content, 
    isLoading, 
    error,
    isError 
  } = useQuery({
    queryKey: ['homeData'],
    queryFn: fetchHomeData,
    staleTime: 5 * 60 * 1000, // البيانات تعتبر حديثة لمدة 5 دقائق
    gcTime: 10 * 60 * 1000,   // وقت الاحتفاظ بالبيانات في الكاش (10 دقائق)
    retry: 1,                  // إعادة المحاولة مرة واحدة فقط عند الفشل
    refetchOnWindowFocus: false, // لا تعيد جلب البيانات عند التركيز على النافذة
  });

  // عرض حالة التحميل
  if (isLoading) {
    return (
      <div className="page-content active" id="home">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // عرض حالة الخطأ (مع استخدام المحتوى الاحتياطي)
  if (isError) {
    console.log('Using fallback content due to error:', error);
  }

  return (
    <div className="page-content active" id="home">
      
      {/* 1. HERO SECTION - DYNAMIC */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${
            content?.hero?.image || collectiveHero
          })` 
        }}
      >
        <div className="hero-content">
          {/* شعار النادي - يظهر فقط في الموبايل */}
          <img src={logo} alt="MoQawill Logo" className="mobile-logo" />
          
          <h1 id="heroTitle">{content?.hero?.title || "Welcome To MoQawill"}</h1>
          <p id="heroSubtitle" className="hero-subtitle">
            <span className="hero-symbol">★</span> 
            {content?.hero?.subtitle || "Learn here, lead anywhere"} 
            <span className="hero-symbol">★</span>
          </p>
          {/* الزر - يظهر فقط في سطح المكتب */}
          <a href="#about" className="cta-button desktop-only">Explore Our World</a>
        </div>
      </section>

      {/* 2. ABOUT SECTION - DYNAMIC */}
      <section className="content-card" id="about">
        <h2 className="section-title">Who Are We?</h2>
        <p className="about-text">
          {content?.about?.text || 
            "MoQawill Club is a scientific and cultural organization affiliated with the Higher School of Management in Tlemcen. Established in 2020 by official decree No. 01, the club is dedicated to promoting entrepreneurship, innovation, and scientific research in the field of management sciences."
          }
        </p>
      </section>

      {/* 3. LATEST ACTIVITIES SECTION - DYNAMIC */}
      <section className="latest-activities">
        <h2 className="section-title">Our Latest Highlights</h2>
        <div className="activities-grid">
          
          {content?.activities && content.activities.length > 0 ? (
            content.activities.map((activity) => (
              <div className="activity-card" key={activity.id}>
                <div className="activity-img-wrapper">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    loading="lazy" 
                  />
                </div>
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              {/* FALLBACK - STATIC ACTIVITIES IF NO DATA YET */}
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Opening Day" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Opening Day</h3>
                  <p>Launching our academic journey with energy and vision.</p>
                </div>
              </div>
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Blue November" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Blue November</h3>
                  <p>Advocating for health awareness and community support.</p>
                </div>
              </div>
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Alger Book Expo" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Alger Book Expo</h3>
                  <p>Expanding horizons through literature and business resources.</p>
                </div>
              </div>
            </>
          )}

        </div>
      </section>

      {/* 4. COLLABORATION SECTION - DYNAMIC */}
      <section className="contact-footer">
        <div className="contact-container">
          <h2>Ready to Collaborate?</h2>
          <p>Join MoQawill today and be part of the future of management.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{content?.contact?.email || "moqawillesmt@gmail.com"}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{content?.contact?.location || "ESM, Tlemcen, Algeria"}</span>
            </div>
          </div>
          {/* تم حذف روابط السوشيال ميديا من هنا للاكتفاء بوجودها في الـ Footer */}
        </div>
      </section>

    </div>
  );
};

export default Home;