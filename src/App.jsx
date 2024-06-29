
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import Bracelets from './Components/Bracelets'
import Jews from './Components/Jews'

import Suits from './Components/Suits'
import Swag from './Components/Swag'
import Tradition from './Components/Tradition'
import Designers from './Components/Designers'

function App() {
 

  return (
    
<div className=' max-h-screen  '>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Testimonials' element={<Testimonials/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Bracelets' element={<Bracelets/>}/>
    <Route path='/Jews' element={<Jews/>}/>
    <Route path='/Suits' element={<Suits/>}/>
    <Route path='/Swag' element={<Swag/>}/>
    <Route path='/Tradition' element={<Tradition/>}/>
    <Route path='/Designers' element={<Designers/>}/>
  </Routes>
  </div>

  
  )
}

export default App
