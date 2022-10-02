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
    // run()
    if(running){
        timer = setInterval(()=>{
            setNum(num-1)
        },1000)
        setTimerId(timer)
    }else{
        clearInterval(timerId)
    }
    if(num <= 0){
        clearInterval(timer)
    }
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
                    <button className='parentButton' onClick={()=>setNum(inpvalue)}> START</button> 
                   
                </div>
                <div className="buttonContainer">
                    <button className='parentButton' onClick={handleCounter}>{running ? 'PAUSE' : 'PLAY'}</button>
                    <button className='parentButton' onClick={()=>setNum(inpvalue)}>RESET</button>
                </div>
            </div>
        </div>
    )
}

export default Parent