import React from 'react'
// CSS
import './card.css'
// Components
import Slideshow from '../layout/slideshow/Slideshow'

const Card = ({ footer, images, title, description }) => {

  return (
    <div className="card" >
      <div className="card-header" >
        <Slideshow 
          images = { images }
        />
      </div>
      <div className="card-container">
        <h3 className="card-title">{ title }</h3>
        <p className="card-description">{ description }</p>
        {
          footer &&
            <div className="card-footer">
              <i className="fas fa-heart"></i>
              <i className="fas fa-ellipsis-h"></i>
            </div>
        }
      </div>
    </div>
  )
}

export default Card
