import { useState } from 'react'

function App(){
let [count, setCount] = useState(0)



//usestate is a hook and hook is a function that provide react
//setcount is a function that tell react that change state of count setcoumt(count)
// they can update the value of count and rerender the app() function
function IncreaseNumber(){
  
  setCount(count+1)
}

function DecreaseNumber(){
  
  setCount(count-1)
}

return(
  <>
  <p>Counter: {count}</p>
  <button onClick={IncreaseNumber}>increment</button>
  <button onClick={DecreaseNumber}>decrement</button>
  </>
)
}

export default App;
