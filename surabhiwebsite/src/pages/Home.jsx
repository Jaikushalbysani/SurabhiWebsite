import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import video1 from '../assets/vid1.mp4';
import video2 from '../assets/surabhi2.mp4';
import y2024i from '../assets/2024i.jpg';
import y2023i from '../assets/2023i.jpg';
import y2022i from '../assets/2022i.jpg';
import blur from '../assets/Rectangle 2.png';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import underline from '../assets/underline.png';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';
import g11 from '../assets/g11.jpg';
import y2024 from '../assets/2024.png';
import y2023 from '../assets/2023.png';
import y2022 from '../assets/2022.png';
import footer from '../assets/footer.png';
import Lenis from '@studio-freight/lenis';


const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
    <div className="home-container">
      <div className="header">
      <video
          id="videos"
          src={video2}
          autoPlay
          muted
          loop
        />
      </div>

      <div className="headline">
        <h1>SURABHI <span>2025</span></h1>
      </div>

      <div className="blur">
        <img src={blur} alt="" className="blur" />
      </div>

      <div id="scroller">
        <div id="scroller-in">
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Engage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Enagage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
          <h4>Enagage .&nbsp;</h4>
          <h4>Connect .&nbsp;</h4>
          <h4>Celebrate .&nbsp;</h4>
        </div>
      </div>



      <div className="what1">
        <h1>What is Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>


      <div className="video-container">
        <video
          id="videos"
          src={video1}
          autoPlay
          muted
          loop
        />
      </div>

      <div id="scroller1">
        <div id="scroller-in1">
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
          <h4>Let Us Celebrate Talent and Tradition Together!</h4>
        </div>
      </div>

      <div className="map">
        <div className="prt1">
          <img src={l1} alt="" className="l1" />
          <Link to="/eventslist">
          <button>Event List</button></Link>
          <p>Discover a wide range of exciting events curated for every interest. Browse through the complete list and find the perfect one for you.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/register">
          <button>Event Registration</button></Link>
          <p>Easily sign up for the events you’re interested in. Secure your participation with just a few clicks and get ready to join the fun.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/">
          <button>Registered Events</button></Link>
          <p>Keep track of all the events you’ve registered for. Manage your entries, view details, and make changes if needed.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/schedule">
          <button>Events schedule</button></Link>
          <p>Stay informed about the dates, times, and venues of all upcoming events. Plan ahead to make sure you don’t miss out.</p>
        </div>
        <div className="prt1">
          <img src={l2} alt="" className="l2" />
          <Link to="/needs">
          <button>Events Needs</button></Link>
          <p>Familiarize yourself with the guidelines, rules, and requirements for each event to ensure a seamless and enjoyable experience.</p>
          <img src={l3} alt="" className="l3" />
        </div>
      </div>

    <div className="guests">
      <h1>Our Guests</h1>
      <img src={underline} alt="" className="undeline" />
      <div className="imgscroll">
      <img src={g1} alt="" className="g1" />
      <img src={g2} alt="" className="g1" />
      <img src={g3} alt="" className="g1" />
      <img src={g4} alt="" className="g1" />
      <img src={g5} alt="" className="g1" />
      <img src={g6} alt="" className="g1" />
      <img src={g7} alt="" className="g1" />
      <img src={g8} alt="" className="g1" />
      <img src={g9} alt="" className="g1" />
      <img src={g10} alt="" className="g1" />
      <img src={g11} alt="" className="g1" />
      </div>
      <img src={underline} alt="" className="undeline" />
    </div>

    

      <div className="what1">
        <h1>Why attend Surabhi?</h1>
        <img src={underline} alt="" className="undeline" />
        <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment. This year, we are dedicated to overcoming past challenges to ensure an enriched experience for participants and attendees.</p>
      </div>

      <div className="years">
        <div className="y2024">
          <img src={y2024} alt="" className="y2024" />
          <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2024i} alt="" className="y2024i" />
          </div>

        </div>
        <div className="y2024">
          <img src={y2023} alt="" className="y2024" />
          <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2023i} alt="" className="y2023i" />
          </div>

        </div>
        <div className="y2024">
          <img src={y2022} alt="" className="y2024" />
        <div className="y2024d">
            <p>Surabhi 2025 is a two-day national cultural fest at KL University that highlights student creativity through music, dance, drama, and artistic expressions. With renowned artists and exceptional student talent, this event embodies diversity in a supportive and vibrant environment.</p>
            <img src={y2022i} alt="" className="y2022i" />
          </div>

        </div>
      </div>

      <div className="footer">
        <img src={footer} alt="" className="footer" />
      </div>
    </div>
  );
};

export default Home; 