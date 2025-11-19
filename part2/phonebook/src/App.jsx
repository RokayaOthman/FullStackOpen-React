import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234561', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-2343455', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-64231222', id: 4 }
  ]) 

  // to store user submitted input
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addNameNumber = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newName)
    if (!alreadyExists) {
       const personObject = {
        name: newName,
        number: newNumber,
       }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
     }
    else {
      window.alert(`${newName} is already added!`)
    }
  }
  
  // this function is called with the event handler inside input field
  // onChange handler must be with a value prop
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newSearch} type='search' onChange={handleSearchChange}/>
      </div>
      ...
      <form onSubmit={addNameNumber}>
        <div>
          name:   <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number : <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>  
      </form>
      <h2>Numbers</h2>  
      <ul>

          {filteredPersons.map((person, index) => <li key={person.id}>{person.name}{person.number}</li>)}
          {/* {persons.map((person, index) => <li key={index}>{person.name}{person.number}</li> ) */}
      </ul>
    </div>
  )
}

export default App