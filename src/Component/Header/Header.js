import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
   <> <header className='header-part'>
        <Link  className='heading'>BrainiacQuiz</Link>
    </header>
      <hr className='divider'/>
      </>
  )
}

export default Header