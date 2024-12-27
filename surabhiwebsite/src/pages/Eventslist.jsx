import React from 'react';
import './Eventslist.css';
import alleve from '../assets/allevents.png';
import footer from '../assets/footer.png';

const Eventslist = () => {
  return (
    <div className="eventslist-container">
      <div className="alllist">
        <img src={alleve} alt="" className="alleve" />          
      </div>

      <div className="footer">
        <img src={footer} alt="" className="footer" />
      </div>
    </div>
  );
};

export default Eventslist; 