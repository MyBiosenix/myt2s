import React from 'react'
import { FaStar } from 'react-icons/fa'

function RProp({user,name,rate,review,reply}) {
  return (
    <div className='rprop'>
        <div className='inprop'>
            <img src={user} className='usericon' alt='User'/>
            <div className='in-inprop'>
                <p>{name}</p>
                <div className='rateicon'>
                    {Array(rate).fill().map((_,i)=>(
                        <FaStar key={i} color='#f4a328'/>
                    ))}
                </div>
            </div>
        </div>
        <p>{review}</p>
        {reply && (
            <div className='rreply'>
                <p><strong>Tech2Shine Labs:</strong>{reply}</p>
            </div>
        )}
      
    </div>
  )
}

export default RProp
