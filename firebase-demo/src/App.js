import {Firebase,db} from './firebase/config'

import { collection, getDocs,addDoc ,doc,deleteDoc , setDoc} from 'firebase/firestore'; 

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={async()=>{
        const prodt = collection(db, 'products');
        // const prodtSnapshot = await getDocs(prodt);
        // const prodtAdd = await addDoc(prodt,
        //   {
        //     name:'MI',
        //     price:200
        //   }
        // )
        // const prodtList = prodtSnapshot.forEach((obj)=>{
        //   console.log(obj.data());
        // })
        // const deleteData = await deleteDoc(doc(db,'products','BEBOoJt7Q8g08NJSFQXB'))
        const updataData = await setDoc(doc(db,'products','5eOMutqI2uHlGjDxWEJq'),
      {
        price:100
      })
        return updataData
      }}>Click Me</button>
    </div>
  );
}

export default App;
