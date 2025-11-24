import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hooks from './components/Hooks'
 
export const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>

  <Routes>   
  <Route path="/" element={<h1> This is home page </h1>}/>
  <Route path="/about" element={<h1> This is about page </h1>}/>
  <Route path="/contact" element={<h1> This is contact page </h1>}/>
  <Route path="/blog" element={<h1> This is blog page </h1>}/>
  <Route path="/test" element={<Hooks/>}/>
  
  </Routes>  
  <Footer/>
</BrowserRouter>


    
    </>
  )
} 
export default App
