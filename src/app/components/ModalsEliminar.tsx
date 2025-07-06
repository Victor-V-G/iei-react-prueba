import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRecuperarDatosEliminar from './ComponenteRecuperarDatosEliminar'
import './modals.styles.css'

const ModalsEliminar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) {
      return null
    } 

  return (
    <div className="ModalsBox">
      <div className="ModalsContent">
        <h1>MODALS ELIMINAR</h1>
        <ComponenteRecuperarDatosEliminar traerDatos={() => {}}/>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  )
}

export default ModalsEliminar