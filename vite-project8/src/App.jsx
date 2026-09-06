import { useState } from 'react'
import React from 'react'

function App() {
  const [name, setName] = useState('')
  const [age, setAge]= useState('')
  const[password, setPassword] = useState('')

  function handelSubmit(e){
    (e.preventDefault)
    console.log(name)
    console.log(age)
    console.log(password)
  }
    return (
    <>
  <form onSubmit={handelSubmit}>
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
      <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='enter age'/>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'/>
      <button>Submit</button>
    </div>
  </form>
    </>
  )
}

export default App;
      