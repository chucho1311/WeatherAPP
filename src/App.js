
import './App.css';
// import imagesPhoto from "./components/weatherImages.json";
import getWeather from './services/getWeather'
import { useEffect, useState} from 'react'

function App() {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [icon, setIcon] = useState('')
  const [describe, setDescribe] = useState('')
  const [temp, setTemp] = useState('')
  const [celsius, setCelsius] = useState(true)

  useEffect (() => {

    navigator.geolocation.getCurrentPosition((position) => {

      console.log(position.coords)
      getWeather(position.coords.latitude, position.coords.longitude)
      .then(response => {
        console.log(response.data)
        setCity(response.data.name)
        setIcon(response.data.weather[0].icon)
        setCountry(response.data.sys.country)
        setDescribe(response.data.weather[0].description)
        setTemp(response.data.main.temp)
      })
      .catch((err) => console.log(err))
    })

  },[])

  const finalTemp = Math.floor(temp - 273.15)

  return (
    <div className="App">
      <header className="App-header" >
        <div className='div'>
          <div className='div-2'>
            <h1 className='number'>{celsius ?finalTemp  : (finalTemp * 9/5) + 32} {celsius ? "°C" : "°F"}</h1>
            <button className='button' onClick={() => setCelsius(!celsius)}> Change temp to {celsius ? 'fahrenheit' : 'celsius'}</button>
          </div>
          
          <div className='card'>
            <h2>{city}</h2>
            <h2>{country}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=''/>
            <h3>{describe}</h3>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
