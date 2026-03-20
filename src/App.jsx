import './App.css'
import Home from './Home'
import AboutSection from './about/AboutSection'
import { Route, Routes } from 'react-router'
import ServiceSection from './services/ServiceSection'
import Contact from './contact.jsx/Contact'

function App() {

  return (
    <>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<AboutSection />} />
       <Route path='/services' element={<ServiceSection />} />
       <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
