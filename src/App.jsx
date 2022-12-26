import { useState, useEffect } from 'react'
import axios from 'axios'
import starfire from "./assets/images/starfire.jpg"
import yoko from "./assets/images/yoko.png"
import WeatherApp from './components/WeatherApp'
import './App.css'

function App() {
  
  const [wthr, setWthr] = useState({})

  useEffect( () => {
    function success(pos) {
      const crd = pos.coords;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=29bb4ec2aab00711da93eb66a42db3c7`)//
      .then(res=>{setWthr(res.data)})
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
  },[])

console.log(wthr)

  return (
    <div className="App">
      <WeatherApp
      country= {wthr.sys?.country}
      city= {wthr.name}
      icon= {`http://openweathermap.org/img/wn/${wthr.weather?.[0].icon}@2x.png`}
      gralWthr={wthr.weather?.[0].main}
      temperature={wthr.main?.temp}
      apparentTemp={wthr.main?.feels_like}
      minTemp={wthr.main?.temp_min}
      />
    </div>
  )
}

export default App
