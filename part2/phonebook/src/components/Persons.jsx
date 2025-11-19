const PersonsDisplay = ({persons, newSearch}) => {
      const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch))
    return (
        <ul>
          {filteredPersons.map((person, index) => <li key={person.id}>{person.name}{person.number}</li>)}
          {/* {persons.map((person, index) => <li key={index}>{person.name}{person.number}</li> ) */}
        </ul>
    );
};

export default PersonsDisplay