import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  // to store user submitted input
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newName)
    if (!alreadyExists) {
        const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>  
      </form>
      <h2>Numbers</h2>
      ...   
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name}</li> )}
      </ul>
    </div>
  )
}

export default App