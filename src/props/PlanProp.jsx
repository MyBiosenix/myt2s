import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

function PlanProp({popular,name,price,descri,btn,onBuy,project}) {
  return (
    <div className='bigplan'>
        <div className='plan'>
            {popular &&(
                <div className='pops'>
                    <p>{popular}</p>
                </div>
            )}
            <div className='np'>
                <h6>{name}</h6>
                <h5>{price}</h5>
            </div>
            <div className='descriptive'>
                {descri.map((line, index) => (
                    <p key={index} className='deline'>
                        <HiCheckCircle/>
                        {line}
                    </p>
                ))}
            </div>
            <button onClick={()=>onBuy(name,project)} >{btn}</button>
        </div>
    </div>
  )
}

export default PlanProp
