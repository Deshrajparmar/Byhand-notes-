import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router";
import HomePage from './components/HomePage'
import Singup from './components/Signup'
import Login from './components/login';
import Post from './components/Post';
import Blog from './components/blog';
import BlogDetails from './components/BlogDetails';




function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
         
        <Route path="/" element={ <HomePage/>} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:id" element={<BlogDetails />} />
         <Route path="/post" element={<Post />} />
        <Route path = "/signup" element ={<Singup/>}/>
        <Route path="/login" element={<Login />} />
        

      </Routes>
    
   
   
    </BrowserRouter>
      
    </>
  )
}

export default App
