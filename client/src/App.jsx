import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Index from './components/Index'
import Login from './components/Login'
import Layout from './Layout'
import SignUp from './components/SignUp'
import axios from 'axios'
import AccountPage from './components/AccountPage'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
    
     <Routes>
        <Route path='/' element ={<Layout/>}>
         <Route index element={<Index/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<SignUp/>} />
         <Route  path='/account/:subpage?' element={<AccountPage/>} />
         <Route  path='/account/:subpage/:action' element={<AccountPage/>} />
        
          </Route>
     </Routes>
    </>
  )
}

export default App
