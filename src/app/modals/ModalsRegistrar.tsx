import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRegistrarDatosEvento from '../components/ComponenteRegistrarEvento'
import './modals.styles.css'

const ModalsRegistrar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen){
      return null
    } 

  return (
    <div className="ModalsBox">
      <div className="ModalsContent">
        <h1>MODALS REGISTRAR</h1>
        <ComponenteRegistrarDatosEvento/>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  )
}

export default ModalsRegistrar