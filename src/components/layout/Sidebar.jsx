import React from 'react'

const Sidebar = ({ open }) => {
  return (
    <div className={open ? 'sidebar':'sidebar-hide'}>
      <ul className='sideBarList'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar