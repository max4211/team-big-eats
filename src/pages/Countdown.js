import React from 'react';
import Countdown from 'react-countdown';
import 'bootstrap/dist/css/bootstrap.min.css';

  
const About = () => {
    const date = Date.parse("24 Dec 2022 13:30:00 PST")
  return (
    <div>
        <h2>Countdown until ostarr/masmith hang in SF!</h2>
      <Countdown date={date} />
    </div>
  );
};
  
export default About;