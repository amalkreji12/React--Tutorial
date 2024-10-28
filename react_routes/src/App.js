import React from 'react';

import { useState } from 'react';

import About from './container/About';
import Profile from './container/Profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  const [state, setState] = useState('')

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

        <Routes>
          <Route element={<About />} path='/about' />
          <Route element={<Profile />} path='/profile' />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
