import React, { useEffect, useState } from 'react'
import '../CSS/parent.css'
import Child from './Child'
const Parent = () => {
const[num,setNum] = useState(0)
const[inpvalue,setInpValue] = useState(0)
const [running,setrunning] = useState(true)
let [timerId,setTimerId] = useState(0)

var timer;

var  run = () =>{
    if(timer)clearInterval(timer);
    timer = setInterval(()=>{
        setNum(num-1)
    },1000)
    
}
useEffect(()=>{
    if(running){
        timer = setInterval(()=>{
            setNum(num-1)
        },1000)
        setTimerId(timer)
    }else{
    // ===============================clearing the setinterval that was schedulde when we stopped the timer=====================
        clearInterval(timerId)
    }
    // ==============================when the num will become 0 Counter will stop==============================
    if(num <= 0){
        clearInterval(timer)
    }
    // ===========================handling the unmounting lifecycle of react functional component================================
    return(()=>clearInterval(timer))
},[num])
const handleCounter = ( ) =>{
  setrunning(!running)
  running ? clearInterval(timer) :  run()

}
    return (
        <div className="CounterContainer">
            <div className="iconContainer">
                <span class="material-symbols-outlined">hourglass_top</span>
                <h4>TIMER</h4>
            </div>
            <hr />
            <Child num={num}/>
            <hr />
            <div className="parentButtonMainContainer">
                <div className="buttonContainer">
                    <input className='parentinput' type="number" placeholder='Initial Value' onChange={(e)=>setInpValue(e.target.value)} />
                    {/* ==========================providing the initial value========================== */}
                    <button className='parentButton' onClick={()=>setNum(inpvalue)}> START</button> 
                   
                </div>
                <div className="buttonContainer">
                 {/* ==============================depending upon the running status button state will be set============================ */}
                    <button className='parentButton' onClick={handleCounter}>{running ? 'PAUSE' : 'PLAY'}</button>
                    <button className='parentButton' onClick={()=>setNum(inpvalue)}>RESET</button>
                </div>
            </div>
        </div>
    )
}

export default Parent