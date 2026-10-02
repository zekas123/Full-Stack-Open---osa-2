import { useState, useEffect } from 'react'
import getWeather from './getWeather'

const PrintCountry = ({ countryInfo }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const city = countryInfo.capital?.[0]
    if (city) {
      console.log(`[PrintCountry] mount, loading weather for "${city}"...`)
      setWeather(null)
      getWeather(city)
        .then(response => {
          setWeather(response.data)
          console.log(`[PrintCountry] weather state updated for "${city}"`)
        })
        .catch(() => {
          console.log(`[PrintCountry] weather failed for "${city}", останется пусто`)
        })
    }
  }, [countryInfo])

  return (
    <div>
      <h1>Name: {countryInfo.name.common}</h1>
      <p>Capital: {countryInfo.capital?.[0]}</p>
      <p>Area: {countryInfo.area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(countryInfo.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} />
      <h2>Weather in {countryInfo.capital?.[0]}</h2>
      {weather && (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default PrintCountry
