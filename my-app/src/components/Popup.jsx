import React, { useState } from 'react'
import '../CSS/popup.css'
import PopupChild from './PopupChild'
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";

const Popup = () => {
    const[arr,setArr] = useState([])
    const[inpvalue, setInpValue] = useState()
    const[show,setShow] = useState(false)

const handleadd =  ( ) =>{
    setArr([...arr,inpvalue])
}
console.log(arr)

const handleShow = ( ) =>{
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
    <div className="popupButton">
    <Button
        variant="outlined"
        color="white"
        style={{width:"14vw",backgroundColor:"rgb(116,129,241)",color:"white",marginLeft:'-2vw'}}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Close Bottom Sheet'  : 'Open Bottom Sheet'}
      </Button>
     </div>
    </div>
    <Backdrop
        open={show}
        onClick={() => {
          setShow(true);
        }}
      >
    {/* =========================depending upon the show status popup will be visible or hidden ============================= */}
   {show ?  < PopupChild arr={arr}/> : ''}
      </Backdrop>
     </div>

    </>
  )
}

export default Popup