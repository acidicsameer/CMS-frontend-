import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import Navbar from './components/Navbar'

import Home from './Pages/HomePage/Home'
import CreateBlog from './Pages/CreateBlog/CreateBlog'
import SinglePage from './Pages/SingleBlog/SinglePage'
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog'

export const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
  <Routes>   
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<CreateBlog/>}/>
  <Route path="/singleblog/:id" element={<SinglePage/>}/>
  <Route path="/edit/:id" element={<UpdateBlog/>}/>
  

  
  
  </Routes>  
 
</BrowserRouter>


    
    </>
  )
} 
export default App
