import React from 'react'
import '../styles/Thanks.css'
import { LogoMiguelLetters } from '../assets/icons'

function Thanks() {
  return (
  <main className='main-thanks-container'>
        <section className="black-container">
            <h2>¡Gracias por tu compra!</h2>
            <figure class="logo-firma">
                <a  href="../index.html"><LogoMiguelLetters/></a>
            </figure>
   
        </section>
        
       

    </main>
  )
}

export default Thanks