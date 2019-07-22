import React from 'react'
import classNames from 'classnames'

const Modal = ({ children, show, showModal }) => {

  const ModalClass = classNames('Modal-wrapper', {
    showModal: show
  })

  return(
    <div className="Modal">
      { show && <div className="Modal-overlay" onClick={showModal} /> }
      <div className={ModalClass}>
        { children }
      </div>
    </div>
  )
}

export default Modal