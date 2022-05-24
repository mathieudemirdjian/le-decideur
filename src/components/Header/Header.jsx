import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import Hamburger from 'hamburger-react'
import './header.scss'

function Header () {
    const [isOpen, setOpen] = useState(false)
 
  return (
    <header className='header'>
        <a className='header-logo' href="/">
            <img className='header-logo-img' src={logo} alt="sigle du site" />
        </a>
        <h1 className='header-title'> Titre </h1>
        <Hamburger className='header-menu' toggled={isOpen} toggle={setOpen} />
        
    </header>
  );
}

export default Header
