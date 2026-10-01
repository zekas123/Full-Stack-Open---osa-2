
const PersonForm = ({ 
  addPerson, 
  newName, 
  setNewName, 
  newNumber, 
  setNewNumber, 
  isNameInList 
}) => {

  
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
        <button type="submit" disabled={isNameInList}>add</button>
      </div>
      {isNameInList && <p style={{color: 'red'}}>{newName} is already added to phonebook</p>}
    </form>
  )
}

export default PersonForm