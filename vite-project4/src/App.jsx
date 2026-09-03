import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App(){

  const [users,setUsers] = useState([])
  const [count, setCount] = useState(30)
//useeffect with last empty[] is used to render one time ,if we forget [] function exectue infinite
useEffect(()=>{

async function Gitprofiles(){
  const response = await fetch(`https://api.github.com/users?per_page=${count}`)
  const data = await response.json();
  setUsers(data);
  console.log(data)
}

Gitprofiles()

},[count])


return(
  <>
  <h1>Github profiles</h1>
  <input type='number' value={count} onChange={(e)=>setCount(e.target.value)}/>
  <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexWrap:"wrap",gap:'10px'}}>
   {
    users.map(user=>(
  <img src={user.avatar_url} height={'100px'} width={'100px'} key={users.login}/>
    ))
  }
  
  </div>
  </>
)

}

export default App;
 