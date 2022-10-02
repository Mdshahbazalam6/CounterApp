import React, { useState } from 'react'
import '../CSS/popup.css'
import PopupChild from './PopupChild'

const Popup = () => {
    const[arr,setArr] = useState([])
    const[inpvalue, setInpValue] = useState()
    const[show,setShow] = useState(false)

const handleadd =  ( ) =>{
    setArr([...arr,inpvalue])
}
console.log(arr)
// rgb(25,129,158)
const handleShow = ( ) =>{
    {show ?  document.body.style.backgroundColor='rgb(25,129,158)' : document.body.style.backgroundColor=' rgb(139, 133, 133)'}
    setShow(!show)
}
  return (
    <>
    <div className="popUpmainContainer">
     <div className="popupInputcontainer">
        <input className='popupInput' type="text" placeholder='Add Items' onChange={(e)=>setInpValue(e.target.value)} value={inpvalue}/>
        <button className='popupAddButton' onClick={()=>{
            handleadd()
            setInpValue('')
        }}>ADD</button>
     </div>
     <div className="popupButton">
    <button  className='popUpViewButton' onClick={handleShow}>    {show ? 'Close Bottom Sheet'  : 'Open Bottom Sheet'}</button>
     </div>
    </div>
   {show ?  < PopupChild arr={arr}/> : ''}
    </>
  )
}

export default Popup