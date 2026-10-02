import axios from 'axios'

const getWeather = (city) => {
  const api_key = 'YOUR_API_KEY' // Print your API KEy here XD 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  return axios.get(url)
}
export default getWeather