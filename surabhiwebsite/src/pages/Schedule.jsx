import React from 'react';
import './Schedule.css';
import sch1 from '../assets/sch1.png';
import sch2 from '../assets/sch2.png';

const Schedules = () => {
  return (
    <div className="schedules-container">
      <div className="sch">
      <img src={sch1} alt="sch1" className="sch1" />
      <img src={sch2} alt="sch2" className="sch2" />
      </div>
    </div>
  );
};

export default Schedules; 