import React from "react"
import './index.css'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import User from './components/User/user.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import Github from './components/Github/github.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:"",
        element:<Home/>
      },
      {path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
