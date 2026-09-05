import { useRef, useState } from 'react'


function App() {
  const [time, setTime] = useState(0)


  //useRef returns a mutable ref object whose .current property is initialized to the passed argument
let intervalIdRef = useRef(null)

function handelStart(){
  
  if(intervalIdRef.current!=null){
    return
  }

  intervalIdRef.current = setInterval(()=>{
 setTime(time=>time+1)
  },1000)
}



function handelStop(){
  clearInterval(intervalIdRef.current)
  intervalIdRef.current = null;
}

function handelReset(){
  clearInterval(intervalIdRef.current)
  setTime(0)
  intervalIdRef.current = null;
}

  return (
    <>
    <h1>Stopwatch {time}</h1>
    <button onClick={handelStart}>Start</button>
    <button onClick={handelStop}>Stop</button>
    <button onClick={handelReset}>Reset</button>
    </>
  )
}
export default App;