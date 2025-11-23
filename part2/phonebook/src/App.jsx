import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import PersonFormDisplay from './components/PersonForm'
import PersonsDisplay from './components/persons'
import FilterSearch from './components/Filter'

const App = () => {
  // The task is instead of using the data that is inside App.jsx we will fetch it from db.json
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-1234561', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-532523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-2343455', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-64231222', id: 4 }
  // ]) 

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios 
    .get('http://localhost:3001/persons')
    .then(Response => {
      setPersons(Response.data)
    })
  }, [])

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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newSearch} type='search' onChange={handleSearchChange}/>
      </div>
      ...
      {/* <form onSubmit={addNameNumber}>
        <div>
          name:   <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number : <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>  
      </form> */}
      <FilterSearch newSearch = {newSearch} handleSearchChange = {handleSearchChange} />
      <PersonFormDisplay newName = {newName} newNumber = {newNumber} addNameNumber = {addNameNumber} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>  
      <PersonsDisplay persons = {persons} newSearch={newSearch} />

     
    </div>
  )
}

export default App