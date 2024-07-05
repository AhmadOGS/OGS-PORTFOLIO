import React, { useState } from 'react'
import photoshop from '../images/photoshop.png'
import vegas from '../images/vegas.png'
import js from '../images/js.png'
import html from '../images/html.png'
import css from '../images/css.png'
import eng from '../images/eng.png'
import react from '../images/react.png'

const MySkills = () => {
    const skills = [
        {skill: 'Adobe Photoshop', src: false, img: photoshop},
        {skill: 'Sony Vegas Pro', src: false, img: vegas},
        {skill: 'Java Script', src: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?couponCode=JUST4U02223', img: js},
        {skill: 'HTML', src: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji', img: html},
        {skill: 'CSS', src: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe', img: css},
        {skill: 'React.js', src: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', img: react},
        {skill: 'English', src: false, img: eng}
    ]

    const [currentSkill, setCurrentSkill] = useState({skill: 'Adobe Photoshop', src: false, img: photoshop, desc: 'i love photoshop!'})
    const [visible, setVisible] = useState(false)

    const skillInformationsChange = (skill) => {
        setCurrentSkill({skill: skill.skill, src: skill.src, img: skill.img, desc: skill.desc})
        setVisible(true)
    }

  return (
    <div className='skill-place'>
 
      {/* the skills bar */}
      <div className='skills-navbar'>
        {skills.map(skill => {
            return(
                <div onClick={() => skillInformationsChange(skill)}>
                    <img src={skill.img} alt='' />
                </div>
            )
        })}
      </div>
 
      {/* the skill's informations box */}
      <div id={visible? 'visible-box' : 'hidden'} className='skill-infos-box' onClick={() => setVisible(false)}>
      </div>
      <div id={visible? 'visible' : 'hidden'} className='skill-infos' >
        <h1 onClick={() => setVisible(false)}>X</h1>
        <img src={currentSkill.img} alt='' />
        <h3>{currentSkill.skill}</h3>
        {currentSkill.src? <a target='_blank' rel='noreferrer' href={currentSkill.src}>Source</a> : null}
      </div>
    </div>
  )
}

export default MySkills
