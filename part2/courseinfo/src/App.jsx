const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  
// ..
  
// comment
  const Part = (props) => {
    return (
      <p>
        {props.partNumber} {props.enumber}
      </p>
    )
  }
     const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  
  const Content = (props) => {
    
    return (
      <>
        {parts.map(part => (<p>
              {part.name} {part.exercises}
            </p>
            ))}
      </>
    )
  }

  const Total = (props) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      // <p>
      //   Number of excercises {props.e1 + props.e2 + props.e3}
      // </p>
      <p>
        Number of excercises {total}
      </p>
    )
  }
    
  

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      {/* <Total e1={exercises1} e2={exercises2} e3={exercises3} /> */}
      <Total parts={parts}/>
    </div>
  )
}

export default App