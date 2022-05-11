import React from 'react'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to='/menu ' >
          Menu
        </NavLink>
         <NavLink to='/main' >
          Main
        </NavLink>
      </nav>
    </>
  )
}

export default NavBar
