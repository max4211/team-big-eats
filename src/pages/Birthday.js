import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useSearchParams } from 'react-router-dom'
import Confetti from 'react-confetti'
import MothersDayCard from "../img/whiskeyBirthday.jpg";
import { Helmet } from 'react-helmet';

// example url, slightly customizable
// http://localhost:3000/birthday?bday_girl=Jillian&from_ppl=Max,Noah,%20and%20Whiskey&customMessage=Hope%20today%20is%20almost%20as%20good%20as%20the%20day%20you%20won%20Catan%20for%20the%20first%20time!!


function Mother() {

    const { width, height } = useWindowSize()
    const [searchParams, ] = useSearchParams();
    const bday_girl = searchParams.get('bday_girl');
    const from_ppl = searchParams.get('from_ppl');
    const customMessage = searchParams.get('customMessage');
    // const photo = searchParams.get('photo');
    // console.log(photo);
    return (
        <div className="h-100 w-100">
      <Confetti
        width={width}
        height={height}
      />
      <Helmet>
        <meta property="og:title" content="Happy Birthday" />
        {/* <meta property="og:image" content={MothersDayCard} /> */}
        <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/7410/7410524.png" />

      </Helmet>
      <div className="w-100 h-100 text-center mt-5">
        <h1>Happy Birthday {bday_girl}!</h1>
        {from_ppl && <h3>From {from_ppl}</h3>}
        {customMessage && <h5>{customMessage}</h5>}
        <img src={MothersDayCard} alt="Birthday Card" className="w-50" />
        {/* {photo && <img src={photo} alt=""></img>} */}
      </div>
      </div>
    )
}

export default Mother;