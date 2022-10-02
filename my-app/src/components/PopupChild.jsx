import React, { useState } from 'react'
import '../CSS/list.css'



const PopupChild = ({arr}) => {
 const [length,setLength] = useState(arr.length-arr.length)
 const [direction,setDirection] = useState(75)

 const handleLength = ( ) =>{
    length === -arr.length ? setDirection(0) : setDirection(75)
    length === 0 || length === -arr.length ? setLength(arr.length-arr.length-1) : length === arr.length ? setLength(arr.length-arr.length) : setLength(length-1)
 }

  return (
<div className="listMainConatiner" onClick={handleLength} style={{transition:'1s'}}>
   <div className="listinnerContainer" style={{transform:`translateY(${length*direction}px)`,transition:'1s'}}>
   {
    arr.length === 0 ? <h3>Please Add some Data to show</h3> : arr.map((ele,i)=>{

    return <div className="ContentBox">
      <h3>{ele}</h3>
    </div>
  })
  }
   </div>
</div>
  )
}

export default PopupChild