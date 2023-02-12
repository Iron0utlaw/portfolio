import React from 'react'
import './Header.css'
import { RiHome2Fill } from 'react-icons/ri'
import { MdWork, MdOutlineContactSupport } from 'react-icons/md'
import { GrDocumentDownload } from 'react-icons/gr'
import { useState } from 'react'
import Resume from '../../assets/cv.pdf'

const Header = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <div>
      <div className='header'>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><h5>HV</h5></a>
        <div className='nav'>
          <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><span className='child0'> <RiHome2Fill size={20} /> <span className='nav_text'>Home</span> </span></a>
          <a href="#work" onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><span className='child'> <MdWork size={20} /> <span className='nav_text'>Work</span> </span></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className='child2'> <MdOutlineContactSupport size={20} /> <span className='nav_text'>Contact</span> </span></a>
        </div>
        <a href={Resume} download='Resume'><GrDocumentDownload className='res' size={40} /></a>
      </div>
    </div>
  )
}

export default Header