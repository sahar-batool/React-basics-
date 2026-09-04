import { useState } from 'react'
import Sum from './Sum.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1000)

console.log("app render")

  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setNumber(number+100)}>increase number</button>
    <h2>your current number {number}</h2>
        <p>increase : {number}</p>
    <Sum number={number}></Sum>
    </>
  )
}

export default App;