import React from 'react'
import "./styles/Projects.css"

const Projects =({items}) =>{
    return(
        <div className='projects'>
            <h2>projects 🏗️</h2>
            <div className='projects-card-container'>
                {items.map((item, index) => (
                    <div key={index} className='projects-card'>
                        <img src={item.image} alt='image1'/>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                    </div>
                )
            )}
        </div>
        
        </div>
    )
}

export default Projects