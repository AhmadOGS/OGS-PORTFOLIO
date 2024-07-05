import React, { useState } from 'react'
import thumbnail from '../images/top-100-anime-songs-for-me.jpg'
import ytVideoEditing from '../images/video-editing.jpg'
import todoList from '../images/todo-list.jpg'
import engSubs from '../images/eng-subs.jpg'
import ytBanner from '../images/banner.jpg'
import poster from '../images/black-clover-poster.png'
import photoEditing from '../images/photo editing.jpg'
import photoEditingSimple from '../images/fadi.jpg'
import shortsEditing from '../images/shorts.jpg'
import arabicSubs from '../images/arabic-subs.jpg'
import thumbnail1 from '../images/كيف تتابع فيت.jpg'
import thumbnail2 from '../images/مين عمتك قانيو ولا اياكا.jpg'

const Works = () => {
  const photoshop =[
    {title: 'thumbnails', date: 'Since 2017', thumbnail: thumbnail,isLink: false, link: () => setCurrentContentSimples([thumbnail, thumbnail1, thumbnail2]), desc: 'Youtube Thumbnails'},
    {title: 'youtube banner', date: '2024', thumbnail: ytBanner,isLink: true, link: ytBanner, desc: 'Youtube Banners'},
    {title: 'posters', date: '2024', thumbnail: poster,isLink: true, link: poster, desc: 'Making Posters'},
    {title: 'photo editing', date: '2024', thumbnail: photoEditingSimple,isLink: true, link: photoEditing, desc: 'Photo Editing'}
  ]
  const videoEditing = [
    {title: 'youtube video', date: 'Since 2016', thumbnail: ytVideoEditing,isLink: false, link: () => setCurrentContentSimples(['https://youtu.be/jP5DYk6XDn8?si=AqHFRaAvbXJkI4Rw', 'https://www.youtube.com/watch?v=MPPm9GE1Ol4', 'https://www.youtube.com/watch?v=4LWlKEDGLb4', 'https://www.youtube.com/watch?v=p4WqOl7eAkI']), desc: 'Youtube Videos Editing'},
    {title: 'shorts editing', date: 'Since 2023', thumbnail: shortsEditing,isLink: false, link: () => setCurrentContentSimples(["https://www.instagram.com/reel/C11ha4ZLNlP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "https://www.instagram.com/reel/C16rkewNiYB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "https://www.instagram.com/reel/C2IBDbdtCxC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="]), desc: 'Shorts Editing'}
  ]
  const programming = [
    {title: 'todo-app', date: '2024', thumbnail: todoList,isLink: true, link: 'https://ahmadogs.github.io/OGS-Tasks-Management-Project/', desc: 'Todo List App'}
  ]
  const translating = [
    {title: 'english subs', date: '2021', thumbnail: engSubs,isLink: true, link: 'https://www.youtube.com/watch?v=4LWlKEDGLb4', desc: 'Arabic Video with English-Sub'},
    {title: 'arabic subs', date: '2024', thumbnail: arabicSubs,isLink: false, link: () => setCurrentContentSimples(['https://www.youtube.com/watch?v=-Z834A4E9fw', 'https://www.youtube.com/watch?v=jtwbifQVe2E', 'https://www.youtube.com/watch?v=oRdLu4pdjkI', 'https://www.youtube.com/watch?v=VQoNFC6wPBI', 'https://www.youtube.com/watch?v=AxxLYeMt-xc', 'https://www.youtube.com/watch?v=H37d7Ckp3BI']), desc: 'English Subs to Arabic Subs'}
  ]

  const [myContent, setMyContent] = useState([
    {type: 'Photoshop', desc: 'Some of my experience in Adobe Photoshop', content: photoshop, isSelected: true},
    {type: 'Video Editing', desc: 'Some of my experience in Video Editing', content: videoEditing, isSelected: false},
    {type: 'Programming', desc: "Some Projects i've made", content: programming, isSelected: false},
    {type: 'Translating', desc: 'Translating frm English to Arabic and vice versa', content: translating, isSelected: false}
  ])

  const [currentContent, setCurrentContent] = useState(myContent[0])
  const [currentContentSimples, setCurrentContentSimples] = useState([])
  const [visibility, setVisibility] = useState(false)

  const changeCurrentContent = (itemIndex) => {
    const modyfeingContent = myContent
    for(let i = 0; i < modyfeingContent.length; i++) {
      if (i === itemIndex) {
        (modyfeingContent[i]).isSelected = true
      } else {
        (modyfeingContent[i]).isSelected = false
      }
    }
    setMyContent(modyfeingContent)
    setCurrentContent(myContent[itemIndex])
  }

  return (
    <div className='content-place'>
      
      {/* the simples box */}
      <div id={visibility? 'visible-box' : 'hidden'} className='content-simples-box'  onClick={() => setVisibility(false)}></div>
      <div className='content-simples' id={visibility? 'visible':'hidden'}>
        {
          currentContentSimples.map( simple => {
              return (
                <div className='simple'>
                  <h3>
                    Have a Look!
                  </h3>
                  <a target='_blank' rel='noreferrer' href={simple}>
                    Go
                  </a>
                </div>
              )
          })
        }
      </div>

      {/* navbar for selecting the type of the content */}
      <div className='navbar'>
        {myContent.map( (content, index) => {
          return (
            <div id={content.isSelected? 'selected' : ''} className='content-type' onClick={ () => changeCurrentContent(index)}>
              {content.type}
            </div>
          )
        })}
      </div>
{/* 
      a box that contains the description about the selected content type */}
      <div className='desc-box'>
        {currentContent.desc}
      </div>
{/* 
      the content box */}
      <div className='content-box'>
        {(currentContent.content).map( element => {
          return (
            <div className='card' style={{
              backgroundImage: `url(${element.thumbnail})`,
              backgroundSize: "cover"
            }}>
              <h6>{element.date}</h6>
              <div className='informations'>
                <p>{element.desc}</p>
                {element.isLink? 
                  <a target='_blank' rel='noreferrer' href={element.link} >Show</a>
                : 
                <button onClick={() => {
                  element.link()
                  setVisibility(true)
                }}>
                  Show  
                </button>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Works
