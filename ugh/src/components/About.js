
import React from 'react';
import './About.css';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="image-column">
        <img className="image" src={a} alt="Image 1" />
        <img className="image" src={b} alt="Image 2" />
        <img className="image" src={c} alt="Image 3" />
        <img className="image" src={d} alt="Image 4" />
      </div>
      <div className="text-column">
        <h1>About Kyrgyzstan</h1>
        <p>
          A gem in Central Asia, weaves a tale of nomadic grace amid rugged landscapes. Yurts stand as silent poets, embodying a timeless spirit, and epic Manas poetry echoes through alpine corridors. Bazaars in Bishkek hum with life, and Issyk-Kul's shores offer tranquility. Kyrgyzstan is a journey through untamed beauty and captivating culture, all framed by celestial peaks.
        </p>
        <br />
        <br />
        <br />
        <div className="guide-section">
          <h2>Quick Guide</h2>

          
            <h3>Capital:</h3>
            <p>
              <strong>Bishkek:</strong> A vibrant city where Soviet architecture meets modern energy. Explore bustling markets, parks, and a lively cultural scene.
            </p>
          
          

          
            <h3>Currency:</h3>
            <p>
              <strong>Kyrgyzstani Som (KGS):</strong> Prepare to transact in Soms, easily accessible through local banks and exchange services.
            </p>
          
          

          
            <h3>Weather:</h3>
            <p>
              <strong>Diverse Climates:</strong> From temperate in the lowlands to alpine in the mountains.<br />
              <strong>Summers (June-August):</strong> Pleasant temperatures for outdoor exploration.<br />
              <strong>Winters (December-February):</strong> Snow blankets mountainous regions, offering a winter wonderland.
            </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;