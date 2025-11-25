import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import Navbar from './components/Navbar'

import Home from './Pages/HomePage/Home'
import CreateBlog from './Pages/CreateBlog/CreateBlog'
 
export const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
  <Routes>   
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<CreateBlog/>}/>
  
  
  </Routes>  
 
</BrowserRouter>


    
    </>
  )
} 
export default App
