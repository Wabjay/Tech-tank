import './Navbar.css'
import Logo from '../../images/logo.png'
import RightArrow from '../../images/arrow.png'
import Grid from '../../images/grid.png'
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"


const Navbar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )
  useEffect(() => {
    window
    .matchMedia("(min-width: 1024px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

const [show, setShow] = useState(false);

// console.log(show)

// { window.matchMedia("(min-width: 1024px)").matches && setShow(true) }

const imageClick = ()=>{
  show ? setShow(false) : setShow(true)
  console.log(show)
}
    return (
      <div className="navbar" id="navbar">

{(() => {
        if (matches) {
          return (
            <div className="navbar_content">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
              <div className="nav_links" 
              // style={{display: show}}
              >
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/works">Our Works</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
                <div className="quote">
                  <Link to="/">GET QUOTE</Link>
                  <img src={RightArrow} alt="" />
                </div>
              </div>
            </div>
          );
        } else {
          return (
        <div className="navbar_content">
          <a href="/home">
            <img src={Logo} alt="" />
          </a>
          <img src={Grid} className="dropdown" onClick={() => imageClick()} />
            <div className="nav_links" style={{display: show && 'block'}}
            >
              <ul>
                <li>
                  <Link to="/home" onClick={() => imageClick()}>Home</Link>
                </li>
                <li>
                  <Link to="/services" onClick={() => imageClick()}>Services</Link>
                </li>
                <li>
                  <Link to="/works" onClick={() => imageClick()}>Our Works </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={() => imageClick()}>Contact Us</Link>
                </li>
              </ul>
              <div className="quote" >
                <Link to="/" onClick={() => imageClick()}>GET QUOTE</Link>
                <img src={RightArrow} alt="" />
              </div>
            </div>
        </div>
          );
        }
      })()}




      </div>
    );
}
 
export default Navbar;
