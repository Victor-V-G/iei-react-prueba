import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import './modals.styles.css'

const ModalsEliminar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) {
      return null
    } 

  return (
    <div className="ModalsBox">
      <div className="ModalsContent">
        <h1>MODALS ELIMINAR</h1>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  )
}

export default ModalsEliminar