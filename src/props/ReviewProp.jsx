import React from 'react'
import { FaStar} from 'react-icons/fa'

function ReviewProp({google,rating,content,image,name}) {
  return (
    <div className='rprop1'>
      <img src={google} alt='google' className='google'/>
      <div className='rati'>
        {Array(5).fill().map((_, i) => (
          <FaStar key={i} size={20} color="#f4a328" />
        ))}
      </div>
      <p>{content}</p>
      <img src={image} alt='image' className='user'/>
      <p className='myname'>{name}</p>
    </div>
  )
}

export default ReviewProp
