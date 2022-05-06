
import axios from 'axios';

const getWeather = async (lat,lon) => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cb0174a087cce7e501ef76ee378f579`
    const req = await axios.get(URL)
    return req

}

export default getWeather