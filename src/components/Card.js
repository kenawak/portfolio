import React from 'react'
import "./styles/Card.css"
const Card = (props) => {
    const {items} = props
  return (
    <div className='card'>
        <h1>currently cooking 👨‍🍳</h1>
        {items.map((item, index) => (
            <div key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>   
        ))}
    </div>
  )
}

export default Card