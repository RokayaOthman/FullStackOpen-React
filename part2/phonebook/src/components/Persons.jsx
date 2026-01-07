const PersonsDisplay = ({persons, newSearch, deleteNameNumber}) => {
      const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    return (
        <ul>
          {filteredPersons.map((person, index) => <li key={person.id}>{person.name}{person.number}{<button onClick={() => deleteNameNumber(person.id)}>delete</button>}</li>
          )}
          
          {/* {persons.map((person, index) => <li key={index}>{person.name}{person.number}</li> ) */}
        </ul>
    );
};

export default PersonsDisplay