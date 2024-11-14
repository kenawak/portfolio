import React from 'react'
import "./styles/Header.css"
import photo from "../assets/kena.jpg"
const Header = () => {
  return (
    <header className='header'>
        <div className='profile-card'>
            <img src={photo} alt='photo' className='profile-pic'/>
            <div className='profile-info'>
                <h1>Kena Ibsa</h1>
                <p>Full Stack Engineer & Freelancer</p>
            </div>
            <div className='icon-links'>
                <a href="https://youtube.com/" target='_blank'>
                <i className='fab fa-youtube'></i>
                </a>
                <a href="https://youtube.com/" target='_blank'>
                <i className='fab fa-telegram'></i>
                </a>
                <a href="https://t.me/kenawak_ibsa" target='_blank'>
                <i className='fab fa-twitter'></i>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header