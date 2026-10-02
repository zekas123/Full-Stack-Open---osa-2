import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [printName, searchName] = useState('')

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`)
        .then(() => {
          setPersons(prev => prev.filter(p => p.id !== id))
        })
        .catch(error => {
          console.error('Error deleting person:', error)
          alert('Failed to delete person')
        })
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/persons', {
      name: newName,
      number: newNumber,
    })
    .then(response => {
      setPersons(prev => [...prev, response.data])
      setNewName('')
      setNewNumber('')
    })
    .catch(error => {
      console.error('Error adding person:', error)
      alert('Failed to add person')
    })
  }


  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const isNameInList = persons.some(person => person.name === newName  )

  const personsToShow = printName === ''
    ? persons
    : persons.filter(person => 
        person.name.toLowerCase().includes(printName.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter printName={printName} searchName={searchName} />
     
      <h2>Add a new</h2>
      
      <PersonForm 
        addPerson={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        isNameInList={isNameInList}
        deletePerson={deletePerson}
      />

      <h2>Numbers</h2>
      

      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App