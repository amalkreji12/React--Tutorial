import React from 'react'

const Modal = ({handleCloseModel,onConfirm}) => {
  return (
    <div>
        <div className='modal'>
            <p>Are you sure ,want to delete ?</p>
            <button className='btn btn--alt' onClick={handleCloseModel}>Cancel</button>
            <button className='btn' onClick={onConfirm}>Delete</button>
        </div>
    </div>
  )
}

export default Modal