import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import numberService from './services/numbers'

import PersonFormDisplay from './components/PersonForm'
import PersonsDisplay from './components/persons'
import FilterSearch from './components/Filter'
import Notification from './components/Notification'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
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
      setSuccessMessage(`Added ${newName}`)
      setTimeout(()=>{setSuccessMessage(null)}, 3000)
     }
    else { 
      const existingPerson = persons.find(p => p.name === newName)
     
      // TODO: replace old number with the new one if old number is added to an existing user
      let choice = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(choice){
        const existingPersonObject = {
          name : existingPerson.name,
          number: newNumber
      }

        numberService
        .update(existingPerson.id, existingPersonObject)
        .then(returnedPerson => {
          // replace the old person with the updated one
          setPersons(persons.map(p => p.id === existingPerson.id ? returnedPerson : p ))
          setNewName('')
          setNewNumber('')
        })
      }
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
      <Notification message={successMessage}/>
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