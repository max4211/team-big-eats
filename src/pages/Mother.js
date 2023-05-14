import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useSearchParams } from 'react-router-dom'
import Confetti from 'react-confetti'
import MothersDayCard from "../img/mothersDay.jpg";


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