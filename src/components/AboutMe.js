import react from 'react'
import "./styles/AboutMe.css";
import { IoLogoNodejs } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStreamlit } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const AboutMe = () => {
    return(
        <div className='about-me'>
        <h1>about me 🙎‍♂️</h1>
        <p>Hello👋 its me again! I am a full stack engineer expertise in `backend`, a <span>student</span> and a freelancer based in Ethiopia. I have been working in the tech industry for over 2 years. I have experience in web development, mobile development, and cloud computing. I am passionate about technology and I love to learn new things. I am always looking for new challenges and opportunities to grow as a developer.</p>
        <ul>
            <li>
                <IoLogoNodejs />
            </li>
            
            <li>
                <FaPython />
            </li>
            <li>
                <IoLogoJavascript />
            </li>
            <li>
                <SiStreamlit />
            </li>
            <li>
                <RiTailwindCssFill />
                </li>            
            <li>
                <SiExpress/>
            </li>
            <li>
                <FaCss3 />
            </li>
            <li>
                <FaHtml5 />
            </li>            
        </ul>
    </div>
    )
}

export default AboutMe