const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14 

  const Content = () => {
    return (
      <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}   
      </p>
      <p> 
        {part3} {exercises3}
      </p>
      </>
    )
  }

  const Total = (props) => {
    return (
      <p>
        Number of excercises {props.e1 + props.e2 + props.e3}
      </p>
    )
  }
    
  

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content />
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App