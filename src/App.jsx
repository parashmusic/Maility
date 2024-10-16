import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/contact'
import './cont.css'
import ContactHome from './Components/ContactHome'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
    <Navbar/>
    <div>
      <ContactHome/>
    </div>
    <Footer/>
    {/* <div className='conct'>
    <Contact/>
    </div> */}
    </div>
  )
}

export default App