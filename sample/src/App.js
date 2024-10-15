
import './App.css'
import Header from './components/Header';

function App() {
  const data = 'Data from App.js const data';
  return (
    <div>
      {/* <h1 style={{color:'red',backgroundColor:'blue'}}>Hello World</h1> */}
      <Header data={data}/>
      <h1 className='hello'>Hello World</h1>
      <p>This is my first react app : {data}</p>
      <Outside/>
    </div>
    
  );
}

export default App;

function Outside(){
  return(<h1>Heloo from outside</h1>)
}