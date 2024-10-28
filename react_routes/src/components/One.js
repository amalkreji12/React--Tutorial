import React from 'react'

import Two from './Two'


function One({data}) {
  return (
    <div style={{backgroundColor: 'red',width:'500px'}}>
        <h1>Layer One</h1>
        <Two />
    </div>
  )
}

export default One