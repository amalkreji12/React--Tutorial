import React from 'react'

const Backdrop = ({handleCloseModel}) => {
  return (
    <div className='backdrop' onClick={handleCloseModel}></div>
  )
}

export default Backdrop