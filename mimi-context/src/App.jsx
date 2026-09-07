import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontexprovider from './Context/Usercontextprovider'
import Usercontext from './Context/Usercontext'

function App() {
  

  return (
    <Usercontexprovider>
 <h1>Context Api with chai aur code</h1>
 <Login />
 <Profile />
    </Usercontexprovider>
  )
}
export default App;