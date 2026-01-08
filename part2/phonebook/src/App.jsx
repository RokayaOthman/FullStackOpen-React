import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import numberService from './services/numbers'

import PersonFormDisplay from './components/PersonForm'
import PersonsDisplay from './components/persons'
import FilterSearch from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    numberService
    .getAll() 
    .then(data => setPersons(data))
  }, [])

  const addNameNumber = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newName)
    if (!alreadyExists) {
       const personObject = {
        name: newName,
        number: newNumber,
       }
      
      numberService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })

     }
    else {
      window.alert(`${newName} is already added!`)
    }
  }
 
  const deleteNameNumber = (id) => {
    numberService.remove(id).then(() => {setPersons(prevPersons => prevPersons.filter(person => person.id !== id))})
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
      
      <FilterSearch newSearch = {newSearch} handleSearchChange = {handleSearchChange} />
      <PersonFormDisplay newName = {newName} newNumber = {newNumber} addNameNumber = {addNameNumber} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>  
      <PersonsDisplay persons = {persons} newSearch={newSearch} deleteNameNumber= {deleteNameNumber}/>

     
    </div>
  )
}

export default App