import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {

  const [navbarIsActive, setNavbarIsActive] = useState(false)

  useEffect(() => {

    const handleClickOutsideMenu = (event) => {

      if (event.target.id !== "menu" && navbarIsActive) {
        setNavbarIsActive(false)
      }
    }

    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    }
  }, [document]);




  return (
    <header className='header'>
      <h1 className='header_title'><Link to={"/"}>e-commerce</Link></h1>
      <div className='header_icon-container'>
        <i id='menu' onClick={() => setNavbarIsActive(!navbarIsActive)} className='header_icon bx bx-menu'></i>
      </div>
      <nav id='menu' className={`header_navbar ${navbarIsActive && "header_navbar-active"} `}>
        <ul id='menu' className='header_list'>
          <li id='menu' className='header_list-item'><Link to={"/"} onClick={() => setNavbarIsActive(false)}>Home</Link></li>
          <li id='menu' className='header_list-item'><Link to={"/login"} onClick={() => setNavbarIsActive(false)}>Login</Link></li>
          <li id='menu' className='header_list-item'><Link to={"/register"} onClick={() => setNavbarIsActive(false)}>Register</Link></li>
          <li id='menu' className='header_list-item'><Link to={'/purchases'} onClick={() => setNavbarIsActive(false)}>Purchases</Link></li>
          <li id='menu' className='header_list-item'><Link to={"/cart"} onClick={() => setNavbarIsActive(false)}>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header