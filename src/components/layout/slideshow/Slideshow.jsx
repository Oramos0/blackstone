import React, { useState } from 'react'
// CSS
import './slideshow.css'

let interval

const Slideshow = ({ images }) => {
  let [ current, setCurrent ] = useState(0)

  const handleMouseOver = () => {
    if (current < images.length - 1){
      setCurrent(current ++)
    } else {
      setCurrent(0)
    }
    interval = setTimeout(() => {
      handleMouseOver()
    }, 1800)  
  }

  const handleMouseOut = () => {
    clearTimeout(interval)
    setCurrent(0)
  }

  return (
    <div className="slideshow"
      onMouseOver = { handleMouseOver }
      onMouseOut = { handleMouseOut }
    >
      <img 
        className="slide-item"
        src={ images[current] } 
        alt={`Slide item`}
      />
    </div>
  )
}

export default Slideshow
