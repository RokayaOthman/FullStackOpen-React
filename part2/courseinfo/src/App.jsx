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

  const totalE = course.parts.reduce((acc, part) => acc + (part.exercises) , 0 )

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
      <p>total of {totalE} exercises</p>
    </>
    )
  }
    
  return (
    <Course course={course}/>
  )
}

export default App