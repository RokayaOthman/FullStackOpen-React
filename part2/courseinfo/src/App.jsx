const App = () => {

  // object representing data of course
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>{props.name}</h1>
    )
  }

  const Content = (props) => {
    return (
      <>
      {course.parts.map(part => (<p>
              {part.name} {part.exercises}
            </p>
            ))}
      </>
        
      
    )
  }

  const Course = (props) => {
    return (
    <>
      <Header name={course.name}/>
      <Content />
    </>
    )
  }

  
  
  const Part = (props) => {
    return (
      <p>
        {props.partNumber} {props.enumber}
      </p>
    )
  }

 


  const Total = (props) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <h3>
        Number of excercises {total}
      </h3>
    )
  }
    
  return (
    <Course course={course}/>
  )
}

export default App