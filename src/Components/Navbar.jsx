import React from 'react'
import './Navbar.css'
import chevron from '../assets/chevron.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
        <button
        onClick={() => document.body.classList.toggle('open')}
        className="burger"
      ></button>
      <h1>Maility</h1>

      
      <div className="dropdowns">
        <div className="dropdown">
          <button>
            Services
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>UX/UI Design</button>
            <button>Web Applications</button>
            <button>SEO Advice</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Products
            <img src={chevron} />
          </button>
          <div className="dropdown-menu">
            <button>Learn CSS Ebook</button>
            <button>Security Course</button>
            <button>Masterclass Bundle</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Support
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar