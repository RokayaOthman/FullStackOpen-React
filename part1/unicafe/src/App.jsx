import { useState } from 'react'

function Statistics(props) {
  return (
       <div>{props.word} : {props.value}{props.additional}</div>
  );
}

const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({onClick, text }) => <button onClick={onClick}>{text}</button>
  let all = good + bad + neutral
  let pos = all !== 0 ? good / all : 0
  return ( 
    <>
    <h2><strong>give feedback</strong></h2>
    <Button onClick={() => setGood(good+1)} text={'good'} />
    <Button onClick={() => setNeutral(neutral+1)} text={'neutral'} />
    <Button onClick={() => setBad(bad+1)} text={'bad'} />
    <h2><strong>Statistics</strong></h2>
    <p>No feedback given</p>
      {/* <div>{good} {neutral} {bad}</div> */}
    {/* <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {all}</div>
    <div>average {all/3}</div>
    <div>positive {pos}%</div> 
    
    */}
    <Statistics word="good" value={good}/>
    <Statistics word="neutral" value={neutral}/>
    <Statistics word="bad" value={bad}/>
    <Statistics word="all" value={all}/>
    <Statistics word="average" value={all / 3}/>
    <Statistics word="positive" value={pos} additional="%"/>
    </>
      
    
  )
}

export default App
