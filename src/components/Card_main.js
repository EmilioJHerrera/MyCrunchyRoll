import React from 'react'
import {Col} from 'react-bootstrap'

const Card_main = ({item, index}) => {
  return (
    <Col>
    <div key={index} className='card_style'>
        <img src={item.images.jpg.image_url} alt="{item.title}" className='card_image'/>
        {/* <p>{item.mal_id}</p> */}
        <p className='card_text'>{item.title}</p>
        {/* <p>{item.images.jpg.image_url}</p> */}
    </div>
    </Col>
  )
}

export default Card_main