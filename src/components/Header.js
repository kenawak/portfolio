import React from 'react'
import "./styles/Header.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
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
                <FaGithub/>
                </a>
                <a href="https://youtube.com/" target='_blank'>
                <CiLinkedin/>
                </a>
                <a href="https://t.me/kenawak_ibsa" target='_blank'>
                <FaFacebookF/>
                </a>
                <a href="https://t.me/kenawak_ibsa" target='_blank'>
                <FaTelegramPlane/>
                </a>
                <a href="https://t.me/kenawak_ibsa" target='_blank'>
                <FaXTwitter/>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header