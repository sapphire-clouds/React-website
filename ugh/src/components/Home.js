import React from 'react';
import './Home.css';
import home from '../assets/home.jpg';

function Home() {
  return (
    <div className="Home">
      <img src={home} alt="Home" className="image" />
      <div className="text-overlay">
        <h1>Kyrgyzstan</h1>
        <p>Discover the Jewel of Central Asia</p>
      </div>
    </div>
  );
}

export default Home;