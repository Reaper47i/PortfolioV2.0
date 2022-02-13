import React from 'react';
import { IconContext } from 'react-icons';
import { GiCogLock } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ open, setOpen }) => {
  return (
    <div className='nav'>
      <div className='logo'>
        <IconContext.Provider value={{ size:'2.5rem' }}>
            <GiCogLock/>
        </IconContext.Provider>
        </div>
        <div onClick = {()=> setOpen(!open)} >
            <FaBars style={{ fontSize:'2.2rem' }}/>
        </div>
    </div>
  )
}

export default Navbar