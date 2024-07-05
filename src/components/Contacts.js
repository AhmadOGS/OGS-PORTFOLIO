import React from 'react'
import yt from '../images/youtube.png'
import dis from '../images/dis.png'
import insta from '../images/insta.png'
import tiktok from '../images/TikTok.png'

const Contacts = () => {
  const socialMedia = [
    {media: 'Youtube', img: yt, link: 'https://www.youtube.com/@ogs999', name: 'OGS-أوجيس'},
    {media: 'Discord', img: dis, link: 'https://discord.gg/Sv8JkNYjw5', name: 'OGS Discord Server'},
    {media: 'Instagram', img: insta, link: 'https://www.instagram.com/ogs_lb/', name: 'OGS_LB'},
    {media: 'TikTok', img: tiktok, link: 'https://www.tiktok.com/@ar0135', name: 'OGS'}
  ]

  return (
    <div>
      <div className='contacts-place'>
        {socialMedia.map((media) => {
          return(
            <div className='media'>
              <img src={media.img} alt='' />
              <h1>{media.name}</h1>
              <a target='_blank' rel='noreferrer' href={media.link}>Visit</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contacts
