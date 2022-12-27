import React, { useState } from 'react';
import W01d from '../assets/images/W01d.jpg'

const WeatherApp = ({country, city, icon, gralWthr, temperature, background}) => {

    const [cDeg, setCDeg] = useState(temperature)

    const [degBool, setDegBool] = useState(true)
    
    const toFaren = () => {
      setCDeg(`${(math.round((temperature * 9/5) + 32))} ºF`)
      setDegBool(false)
    }
    
    const toCenti = () => {
      setCDeg(`${temperature} ºC`)
      setDegBool(true)
    }
    
    const changeIconandBg = () => {
      document.body.style.backgroundImage = "url('../src/assets/images/W01d.jpg')"
    }

    return (
        <div className='weather-card'>
            <h1>
                Weather App
            </h1>
            <h2>
                {country}
                <br />
                {city}
            </h2>
            <section className='weather-image'>
                <p>
                  {cDeg ? cDeg: temperature}
                </p>
                <article>
                    <img className="weather-icon" src={icon} alt="" />
                </article>
            </section>
            <p className='wthr-name'>
                {gralWthr}
            </p>
      <button onClick={degBool ? toFaren : toCenti}>
        Change to ºC / ºF
      </button>
        </div>
    );
};

export default WeatherApp;