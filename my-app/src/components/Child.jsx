import React from 'react'
import '../CSS/child.css'

const Child = ({num}) => {
  return (
    <div className="timeContainer">
        <div className='timeinnerContainer'><span style={{fontSize:'5vw',color:'white'}}>{num}</span><span style={{fontSize:"2vw",color:'white'}}>s</span></div>
    </div>
  )
}

export default Child