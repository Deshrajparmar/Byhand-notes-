import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router";
import HomePage from './components/HomePage'
import Singup from './components/Signup'




function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
         
        <Route path="/" element={ <HomePage/>} />
        <Route path = "/signup" element ={<Singup/>}/>

      </Routes>
    
   
   
    </BrowserRouter>
      
    </>
  )
}

export default App
