import axios from 'axios'

const getWeather = (city) => {
  const api_key = 'UNQ1Y2E3ZDY5YjM0YzQ4ZTk5YjA0ZDEyZGUxYjU1ZjI3ZWMwNzQ4'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  return axios.get(url)
}
export default getWeather