import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef, useState } from 'react';
import "./style/index.css"
import { Link } from 'react-router-dom';

export function NavBar() {
  const navRef = useRef()

  const [icon, setIcon] = useState(<FaBars size={26}/>)


  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <Link to="/" className='text-black text-xl font-bold'>Fabíola TuppeWare©</Link>
      <nav ref={navRef}>
        <a href="#">
          <Link to="about" className='hover:border-b-2 hover:border-b-[#E8CEAB]  font-bold'>Sobre nos</Link>
        </a>
        <a href="#">
          <Link to="/location" className='hover:border-b-2 hover:border-b-[#E8CEAB] font-bold'>Localização</Link>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        {icon}
      </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        {icon}
      </button>
    </header>
  );
}