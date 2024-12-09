import React from 'react';
import './Attractions.css'; 
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';
import h from '../assets/h.jpg';
import i from '../assets/i.jpg';
import j from '../assets/j.jpg';

function Attractions() {
  return (
    <div className='attractions'>
      <div className='header'>
        <h1>Attractions</h1>
      </div>

      <div className="attractions-container">
        <div className="c1">
          <img className="image" src={e} alt="Image 1" />
          <h1>Ala Archa National Park</h1>
          <p>  Nestled in the Tien Shan range, Ala Archa National Park is a paradise for nature lovers and hikers. The park offers a range of trails catering to different skill levels, leading to breathtaking viewpoints overlooking glaciers and alpine meadows. The Ak-Sai waterfall is a highlight, providing a serene backdrop for picnics.
            <br />
            <strong>Activities:</strong> <br />
            <b>Hiking:</b> Trails for all levels, from easy walks to challenging ascents. <br />
            <b>Wildlife Watching:</b> Spot marmots, ibex, and rare snow leopards.<br />
            <b>Camping:</b> Enjoy a night under the stars surrounded by pristine nature.<br />
          </p>
        </div>

        <div className="c2">
          <img className="image" src={f} alt="Image 2" />
          <h1>Song Kol Lake</h1>
          <p>  Often referred to as the "Jewel of Kyrgyzstan," Song Kol Lake sits at an altitude of 3,016 meters, surrounded by rolling meadows and snow-capped peaks. Nomadic yurts dot the landscape, providing a unique opportunity to experience Kyrgyzstan's traditional way of life.
            <br />
            <strong>Activities:</strong> <br />
            <b>Horseback Riding:</b> Explore the shores on horseback with local nomadic guides. <br />
            <b>Yurt Stays:</b> Immerse yourself in nomadic culture with an overnight stay..<br />
            <b>Fishing:</b> The lake is home to various fish species for angling enthusiasts.<br />
          </p>
        </div>
      </div>

      <div className="attractions-container">
        <div className="c1">
          <img className="image" src={g} alt="Image 1" />
          <h1>Cholpon-Ata and Issyk-Kul Petroglyphs</h1>
          <p>  Cholpon-Ata, located on the shores of Issyk-Kul, is home to a captivating collection of ancient petroglyphs. Dating back to the 2nd millennium BCE, these rock carvings provide a fascinating glimpse into the region's early cultures.
            <br />
            <strong>Activities:</strong> <br />
            <b>Petroglyph Tours:</b>  Guided tours to the petroglyph sites, explaining their historical significance. <br />
            <b>Lakeside Relaxation</b> Enjoy the beaches and crystal-clear waters of Issyk-Kul.<br />
          </p>
        </div>

        <div className="c2">
          <img className="image" src={h} alt="Image 1" />
          <h1>Karakol and Altyn Arashan</h1>
          <p>  Karakol, the gateway to the Altai Mountains, is a charming town with a rich history. The nearby Altyn Arashan valley is known for its hot springs, offering a relaxing retreat amidst stunning natural scenery.
            <br />
            <strong>Activities:</strong> <br />
            <b>Karakol Church: </b>   Visit the iconic wooden Russian Orthodox church.<br />
            <b>Altyn Arashan Hot Springs:</b> Hike or ride to the hot springs for a soothing bath.<br />
            <b>Skiing: </b>  In winter, Karakol Ski Base is a haven for skiing and snowboarding.<br />
          </p>
        </div>
      </div>
      <div className="attractions-container">
        <div className="c1">
          <img className="image" src={i} alt="Image 1" />
          <h1>Burana Tower and Suyab Archaeological Site</h1>
          <p>  Cholpon-Ata, located on the shores of Issyk-Kul, is home to a captivating collection of ancient petroglyphs. Dating back to the 2nd millennium BCE, these rock carvings provide a fascinating glimpse into the region's early cultures.
            <br />
            <strong>Activities:</strong> <br />
            <b>Petroglyph Tours:</b>  Guided tours to the petroglyph sites, explaining their historical significance. <br />
            <b>Lakeside Relaxation</b> Enjoy the beaches and crystal-clear waters of Issyk-Kul.<br />
          </p>
        </div>

        <div className="c2">
          <img className="image" src={j} alt="Image 1" />
          <h1>Jeti-Oguz Valley</h1>
          <p>  Cholpon-Ata, located on the shores of Issyk-Kul, is home to a captivating collection of ancient petroglyphs. Dating back to the 2nd millennium BCE, these rock carvings provide a fascinating glimpse into the region's early cultures.
            <br />
            <strong>Activities:</strong> <br />
            <b>Petroglyph Tours:</b>  Guided tours to the petroglyph sites, explaining their historical significance. <br />
            <b>Lakeside Relaxation</b> Enjoy the beaches and crystal-clear waters of Issyk-Kul.<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Attractions;

