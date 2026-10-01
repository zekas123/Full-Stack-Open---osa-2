const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map(person => (
        <li key={person.id}>
          {person.name} {person.number} <button type="submit" onClick={() => deletePerson(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Persons