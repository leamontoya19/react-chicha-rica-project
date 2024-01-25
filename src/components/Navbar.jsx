import React from 'react'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BotonToggle from './BotonToggle';


const NavContainer = styled.nav `


`

function Navbar() {
  return (
    <>
    <NavContainer>
    <nav className="nav-bar">
        <ul>
            <BotonToggle />
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/gallery">GALERIA</Link>
            </li>
            <li>
              <Link to="/access">ACCESO</Link>
            </li>
            
        </ul>
    </nav>

    </NavContainer> 
    </>
  )
}

export default Navbar