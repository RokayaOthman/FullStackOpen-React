import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({onClick, text }) => <button onClick={onClick}>{text}</button>
  return (  
    <>
    <h2><strong>give feedback</strong></h2>
    <Button onClick={() => setGood(good+1)} text={'good'} />
    <Button onClick={() => setNeutral(neutral+1)} text={'neutral'} />
    <Button onClick={() => setBad(bad+1)} text={'bad'} />
    <h2><strong>Statistics</strong></h2>
    <p>No feedback given</p>
      {/* <div>{good} {neutral} {bad}</div> */}
    <div>good</div>
    <div>neutral</div>
    <div>bad</div>
    <div>all</div>
    <div>average</div>
    
    </>
      
    
  )
}

export default App
