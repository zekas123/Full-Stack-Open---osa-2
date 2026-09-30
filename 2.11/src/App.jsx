import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [getNotes, setNotes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response =>{
      setNotes(response.data)
    })
  }, [])
  console.log(getNotes.length)
  return(
    <div>
      <h1>Persons</h1>
      {getNotes.map(persons =>(
        <p key={persons.id}>name:{persons.name}<br></br> number {persons.number}</p>
      ))}
    </div>
  )
}
export default App
