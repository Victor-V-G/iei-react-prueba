import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import './modals.styles.css'

const ModalsRegistrar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) return null

  return (
    <div>
        <h1 className="ModalsStyle">MODALS REGISTRAR</h1>
    </div>
  )
}

export default ModalsRegistrar