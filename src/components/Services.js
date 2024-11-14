import React from 'react'
import "./styles/Services.css"

const Services = ({items}) => {
    
  return (
    <div className='services'>
      <h2>services 🛠️</h2>
      <div className='services-card-container'>
      {items.map((item, index) => (
            <div key={index} className='services-card'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                
                {item.link && (
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>Learn More</a>
                )}
            </div>

        ))}
        </div>
    </div>
  )
}

export default Services