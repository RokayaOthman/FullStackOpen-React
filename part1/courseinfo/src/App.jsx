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


  const Part = (props) => {
    return (
      <p>
        {props.partNumber} {props.enumber}
      </p>
    )
  }

  const Content = () => {
    return (
      <>
      <Part partNumber={part1} enumber={exercises1} />
      <Part partNumber={part2} enumber={exercises2} />
      <Part partNumber={part3} enumber={exercises3} />
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
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App