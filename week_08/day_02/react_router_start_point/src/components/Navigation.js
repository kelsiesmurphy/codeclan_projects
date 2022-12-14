import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className='navigation'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/pricing">Pricing</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
            <Link to="/choices">Choices</Link>
        </li> */}
    </ul>
  )
}

export default Navigation