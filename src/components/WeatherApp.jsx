import React, { useState } from 'react';

const WeatherApp = ({country, city, icon, gralWthr, temperature, apparentTemp, minTemp}) => {

    const [cDeg, setCDeg] = useState([50])

    const [degBool, setDegBool] = useState(true)
    
    const toFaren = () => {
      setCDeg((cDeg * 9/5) + 32)
      setDegBool(false)
    }
    
    const toCenti = () => {
      setCDeg((cDeg - 32) * 5/9)
      setDegBool(true)
    }
    
    const changeIconandBg = () => {
      document.body.style.backgroundImage = "url(https://img.freepik.com/premium-vector/cartoon-cat-cute-animal-doodle-kawaii-anime-coloring-page-cute-illustration-clip-art-character_51194-679.jpg?w=2000)"
    }

    return (
        <div className='weather-card' style={{ background: 'cyan'}}>
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
                    {temperature} ºC
                </p>
                <article>
                    <img className="weather-icon" src={icon} alt="" />
                </article>
            </section>
            <p className='wthr-name'>
                {gralWthr}
            </p>
            <section>
                <article>
                    Feel like:
                    <b> {apparentTemp} ºC</b>
                </article>
                <article>
                    Minimum temperature: 
                    <b> {minTemp} ºC</b>
                </article>
            </section>
            <p>
        {cDeg}
      </p>
      <button onClick={degBool ? toFaren : toCenti}>
        Change to ºC / ºF
      </button>
      <button onClick={changeIconandBg}>
        changebg
      </button>
        </div>
    );
};

export default WeatherApp;