import React from 'react'
import Style from './Style.module.css'

const Card = ({image, title, description}) => {

  return (
    <div data-aos="fade-up" className={Style.card}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
