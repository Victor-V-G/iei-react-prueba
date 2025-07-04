import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import './modals.styles.css'

const ModalsMostrar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) return null

  return (
    <div className="ModalsBox">
      <div className="ModalsContent">
        <h1>MODALS MOSTRAR</h1>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  )
}

export default ModalsMostrar