

const PersonForm = ({ 
  addPerson, 
  newName, 
  setNewName, 
  newNumber, 
  setNewNumber,
  isNameInList,
  deletePerson
}) => {
  const buttonClicked = () => {
    if (isNameInList) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        deletePerson(persons.find(p => p.name === newName).id)
        return(true)
      }
      else {
        return(false)
      }
    }
  }
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        
        number: <input 
          value={newNumber}

          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button  type="submit" onClick={buttonClicked} >add</button>
        
        
      </div>
    </form>
  )

}

export default PersonForm