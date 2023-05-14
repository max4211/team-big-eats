import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useSearchParams } from 'react-router-dom'
import Confetti from 'react-confetti'
import MothersDayCard from "../img/mothersDay.jpg";
import { Helmet } from 'react-helmet';

// example url, slightly customizable, could not get images :(
// http://localhost:3000/mothers-day?mom=Amy&kids=Jake,Max,Noah,Zoe,%20and%20Whiskey&customMessage=We%20love%20you%20and%20hope%20you%20have%20a%20special%20day



function Mother() {

    const { width, height } = useWindowSize()
    const [searchParams, ] = useSearchParams();
    const mom = searchParams.get('mom');
    const kids = searchParams.get('kids');
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
        <meta property="og:title" content="Happy Mother's Day" />
        {/* <meta property="og:image" content={MothersDayCard} /> */}
        <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/7410/7410524.png" />

      </Helmet>
      <div className="w-100 h-100 text-center mt-5">
        <h1>Happy Mother's Day, {mom}!</h1>
        {kids && <h3>Love {kids}</h3>}
        {customMessage && <h5>{customMessage}</h5>}
        <img src={MothersDayCard} alt="Mother's Day Card" className="w-50" />
        {/* {photo && <img src={photo} alt=""></img>} */}
      </div>
      </div>
    )
}

export default Mother;