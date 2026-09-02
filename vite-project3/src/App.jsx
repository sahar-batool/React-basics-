import { useState } from 'react'

function App(){
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:"",phone:"",password:""})
  const [isOn, setIsOn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)


   const togglePassword = () => {
    /* flip showPassword here */
    setShowPassword(!showPassword)
  }
  



  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  console.log(form)
  }
//if showpassword become true "hide" else "show"
  return(
    <>
    <h1>Login form</h1>
    <input type='text' name='email' value={form.email} onChange={handleChange}/>
    <input type='text' name='phone' value={form.phone} onChange={handleChange}/>
    <input type={showPassword? "text":"password"} name='password' value={form.password} onChange={handleChange}/>
     <button onClick={togglePassword}>
  {showPassword ? "Hide" : "Show"}
</button>

    </>
  )
}

export default App;

// function Toggle(){
// const [isOn, setIsOn] = useState(false)

// const toggle = () => {
//   setIsOn(!isOn) // flip true → false, or false → true
// }

// return (
//   <button onClick={toggle}>
//     {isOn ? "ON" : "OFF"}
//   </button>
// )
// }