import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRegistrarDatosEvento from '../components/ComponenteRegistrarEvento'
import './modals.styles.css'

const ModalsRegistrar = ({isOpen, closeModal}: InterfaceModalsProps) => {
  if (isOpen != true){
      return null
  } else {
    return (
      <div className="ModalsBox">
        <div className="ModalsContent">
          <h1>MENÚ</h1>
          <ComponenteRegistrarDatosEvento/>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    )
  } 

}

export default ModalsRegistrar