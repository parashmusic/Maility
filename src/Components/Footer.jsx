import React from 'react';
import './Footer.css'; // Assuming styles are in Footer.css

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <article>
          <h2>Subscibe to maility today</h2>
          <button>
            <p>Sign up free</p>
            <span className="material-symbols-outlined">trending_flat</span>
          </button>
        </article>
        <section>
          {/* <img src="src\assets\logo.svg" alt="Logo" /> */}
          <h1>Maility</h1>
          <div className="socials">
            <a href="https://instagram.com/parash.wav" className="fa-brands fa-instagram"></a>
            <a href="https://tiktok.com" className="fa-brands fa-tiktok"></a>
            <a href="https://linkedin.com" className="fa-brands fa-linkedin"></a>
            <a href="https://twitter.com" className="fa-brands fa-twitter"></a>
            <a href="https://pinterest.com" className="fa-brands fa-pinterest"></a>
          </div>
          <ul>
            <li>
              <h3>Resources</h3>
              <a href="#usage">Usage</a>
              <a href="#docs">Docs</a>
              <a href="#support">Support</a>
              <a href="#hardware">Hardware</a>
            </li>
            <li>
              <h3>Developers</h3>
              <a href="#forum">Forum</a>
              <a href="#projects">Projects</a>
              <a href="#source">Source</a>
              <a href="#github">GitHub</a>
            </li>
            <li>
              <h3>Pricing</h3>
              <a href="#plans">Plans</a>
              <a href="#data">Data</a>
              <a href="#volume">Volume</a>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#brand">Brand</a>
              <a href="#partners">Partners</a>
              <a href="#careers">Careers</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
