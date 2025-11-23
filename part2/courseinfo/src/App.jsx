const App = () => {

  // object representing data of course
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ] 
 // // // // /

 // / // // // // // // // // 
  // // // // // // // // // //// 
// // // // // // // // // // // 
  const totalE = course[0].parts.reduce((acc, part) => acc + (part.exercises) , 0 )

  const Header = (props) => {
    return (
      <h1>{props.name}</h1>
    )
  }

  const Content = (props) => {
    return (
      <>
      {course[0].parts.map(part => (<p>
              {part.name} {part.exercises}
            </p>
            ))}
      </>   
    )
  }

  const Course = (props) => {
    return (
    <>
      <Header name={course[0].name}/>
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