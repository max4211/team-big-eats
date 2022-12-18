import React from 'react';
import Countdown from 'react-countdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SFPhoto from "../img/ostarr_masmith.jpg";

  
const About = () => {
    const date = Date.parse("24 Dec 2022 13:30:00 PST")
  return (
    <div style={{ display: 'grid', margin: '20px'}}>
        <h2>Countdown until ostarr/masmith hang in SF!</h2>
      <Countdown date={date} />
      <img src={SFPhoto} alt="ostarr_masmith_photo" style={{ maxHeight:'70%', maxWidth: '40%' }} />
    </div>
  );
};
  
export default About;