import React, { useState ,useEffect } from 'react'
// CSS
import './App.css'
// Components
import Card from './components/card/Card'
// Others
import { imagesSrc } from './media/images'

const App = () => {
  const [ images, setImages ] = useState([])

  useEffect(() => {
    setImages(imagesSrc)
    // eslint-disable-next-line
  },[]) 

  return (
      <div className="App">
        <Card 
          images = { images }
          title = "Card 001"
          description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam quod, voluptates cum ea facere officia eveniet amet nemo sequi quasi odio aperiam distinctio! Architecto unde illum ratione officiis labore?"
          footer = { true }
        />
        <Card 
          images = { images }
          title = "Card 002"
          description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam quod, voluptates cum ea facere officia eveniet amet nemo sequi quasi odio aperiam distinctio! Architec"
          footer = { false }
        />
        <Card 
          images = { images }
          title = "Card 003"
          description = "Lorem ipsum officia eveniet amet nemo sequi quasi odio aperiam distinctio! Architecto unde illum ratione officiis labore?"
          footer = { false }
        />
        <Card 
          images = { images }
          title = "Card 004"
          description = "lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam quod, voluptates cum ea facere officia eveniet amet nemo sequi quasi odio aperiam distinctio! Architecto unde?"
          footer = { false }
        />
        <Card 
          images = { images }
          title = "Card 005"
          description = "lor Loreacere officia eveniet amet nemo sequi quasi odio aperiam distinctio! Architecto unde illum ratione officiis labore?"
          footer = { true }
        />
      </div>
  );
}

export default App;