
import './App.css';
import {useEffect, useState} from "react";
function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);
  useEffect(()=>{
    let interval;
    if (running) {
      interval = setInterval(()=>{
        setTime((prevTime)=> prevTime +10);
      })
    }else if (!running){
      clearInterval(interval);
      
    }
    return ()=> clearInterval(interval);
  },[running])
  return (
    <div className=' flex flex-col items-center justfy-center py-8'>
    <h1 className='text-4xl font-semibold '> Timer</h1>
    <div className='text-2xl font-semibold py-4'>
     <span> {("0"+ Math.floor((time/60000)%60)).slice(-2)}:</span>
     <span> {("0"+ Math.floor((time/1000)%60)).slice(-2)}:</span>
     <span> {("0"+ ((time/10)%100)).slice(-2)}:</span>
    </div>
    <div className=' w-1/3 flex flex-row justify-evenly'>
      {running ?(<button className='border rounded-lg py-1 px-3 bg-red-500 text-white' onClick={()=>{setRunning(false)}}>stop</button>)
      : (<button className='border rounded-lg py-1 px-3 bg-green-500 text-white' onClick={()=>{setRunning(true) }}>start</button>)}
      <button  className='border border-blue-500 rounded-lg py-1 px-3 text-blue ' onClick={ ()=>{setTime(0)}}>reset</button>
    </div>
    </div>
  );
}

export default App;
