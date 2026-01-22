import React from 'react'

function FreeProp({ Icon,title,desc}) {
  return (
    <div className='freeprop'>
        <img src={Icon} alt={title}/>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
  )
}

export default FreeProp
