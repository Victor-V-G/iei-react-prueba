import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import './modals.styles.css'

const ModalsMostrar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) return null

  return (
    <div>
        <h1 className="ModalsStyle">MODALS MOSTRAR</h1>
    </div>
  )
}

export default ModalsMostrar