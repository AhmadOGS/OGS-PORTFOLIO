import React from 'react'
import logo from '../images/personal image.png'

const AboutMe = () => {
  return (
    <div className='about-me-place'>
       <img src={logo} alt='' />
       <div>
            <h2>About me</h2>
            <p>
                My name is Ahmad Tonbari, I'm a Syrian living currently in Lebanon.
                I'm working as a Freelancer 
            </p>
       </div>
    </div>
  )
}

export default AboutMe
