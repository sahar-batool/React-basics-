import React ,{useState, useContext} from 'react'
import Usercontext from "../Context/Usercontext"

function Login(){
const[username, setUsername] = useState('')
const[userpass, setUserpass] = useState('')

const {setUser} = useContext(Usercontext)

const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username,userpass})

}
    return(
        <>
        <div>
            <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type='password' placeholder='password' value={userpass} onChange={(e)=>setUserpass(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login;