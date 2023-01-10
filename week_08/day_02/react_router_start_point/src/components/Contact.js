import React from 'react'
import Navigation from './Navigation'

const Contact = () => {
  return (
    <div>
        <Navigation />
        <h4>Contact</h4>
        <p>Contact us for more details</p>
        <form>
            <label htmlFor='email'>Email</label>
            <input id='email' placeholder='Enter your email'/>
            <label htmlFor='message'>Message</label>
            <textarea id='message' placeholder='Enter your message'></textarea>
        </form>
    </div>
  )
}

export default Contact