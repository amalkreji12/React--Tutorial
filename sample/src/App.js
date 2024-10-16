
import './App.css'
// import Header from './components/Header';
import {useState} from 'react'
import Counter from './Counter';
import Employee from './Employee';

function App() {
  const [count,setCount] = useState(0);
  // const data = 'Data from App.js const data';
  const addCount = ()=>{
    setCount(count+1); 
  }
  let obj = {
    title:'2st Counter',
    count
  }
  let emp = [
    {name:'apple',age:10},
    {name:'orange',age:10},
    {name:'grapes',age:10}
  ]

  return (
    // <div>
    //   {/* <h1 style={{color:'red',backgroundColor:'blue'}}>Hello World</h1> */}
    //   <Header data={data}/>
    //   <h1 className='hello'>Hello World</h1>
    //   <p>This is my first react app : {data}</p>
    //   <Outside/>
    // </div>

    <div className='App'>
      <button onClick={addCount}>Add</button>
      <h1>Count : {count}</h1>
      <Counter title='1st counter' count={count}/>
      <Counter {...obj}/>  
      {
        emp.map((obj,index)=>{
          return (
            // <Employee key={index} name={obj.name} age={obj.age}/>
            <Employee key={index} {...obj}/>
          )
        })
      }
    </div>
    
  );
}

export default App;

// function Outside(){
//   return(<h1>Heloo from outside</h1>)
// }