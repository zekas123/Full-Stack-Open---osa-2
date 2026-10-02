import { useState, useEffect } from 'react'
import axios from 'axios'
import PrintCountry from './components/printCountry'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search country"
      />
      {search && filtered.length > 10 && (
        <div>Too many matches, specify another filter</div>
      )}
      {search && filtered.length === 1 && (
        <PrintCountry countryInfo={filtered[0]} />
      )}
      {search && filtered.length > 1 && filtered.length <= 10 && (
        <ul>
          {filtered.map(c => (
            <li key={c.cca3}>{c.name.common} <button onClick={() => setSearch(c.name.common)}>Show</button></li> 
          ))}
        </ul>

      )}
    </div>
  )
}

export default App
