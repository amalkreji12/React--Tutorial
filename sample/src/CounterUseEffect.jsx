import React,{useState,useEffect} from 'react'

function CounterUseEffect() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        console.log('Component Mounted');
        console.log('Updating 1...'+count);
        console.log('Updating 2...'+count2);
        // return ()=>{
        //     console.log('Component UnMounted...'+count); 
        // }   
    },[count,count2]);

 
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Hello I am Component : {count}</h1>

        <button onClick={()=>setCount2(count2+1)}>Increment</button>
        <h1>Hello I am Component : {count2}</h1>
    </div>
  )
}

export default CounterUseEffect