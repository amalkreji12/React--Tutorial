import React from 'react';

import { useState } from 'react';

import About from './container/About';
import Profile from './container/Profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {AppContext} from './AppContext.js'
function App() {
  const [state, setState] = useState(10)

  return (
    <div className='myApp'>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/about'>About Page</Link>
            </li>
            <li>
              <Link to='/profile'>Profile Page</Link>
            </li>
          </ul>
        </div>

        <AppContext.Provider value={{data:state}}>
        <Routes>
          <Route element={<About />} path='/about' />
          <Route element={<Profile />} path='/profile' />
        </Routes>
        </AppContext.Provider>
      </Router>
    </div>
  )
}


export default App;
