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

const handleShow = ( ) =>{
  // ==============================depending upon the show status I am changing th background color here ==============================
    {show ?  document.body.style.backgroundColor='rgb(25,129,158)' : document.body.style.backgroundColor=' rgb(139, 133, 133)'}
    setShow(!show)
}
  return (
    <>
    <div className="popUpmainContainer">
     <div className="popupInputcontainer">
        <input className='popupInput' type="text" placeholder='Add Items' onChange={(e)=>setInpValue(e.target.value)} value={inpvalue}/>
        <button className='popupAddButton' onClick={()=>{
    // ========================= invoking the function to add item in array and making the value of input null =============================
            handleadd()
            setInpValue('')
        }}>ADD</button>
     </div>
     <div className="popupButton">
    {/* ============================setting the show status here=================================================================== */}
    <button  className='popUpViewButton' onClick={handleShow}>    {show ? 'Close Bottom Sheet'  : 'Open Bottom Sheet'}</button>
     </div>
    </div>
    {/* =========================depending upon the show status popup will be visible or hidden ============================= */}
   {show ?  < PopupChild arr={arr}/> : ''}
    </>
  )
}

export default Popup