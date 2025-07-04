import React from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import './modals.styles.css'

const ModalsEditar = ({isOpen, closeModal}: InterfaceModalsProps) => {
    if (!isOpen) return null

  return (
    <div>
        <h1 className="ModalsStyle">MODALS EDITAR</h1>
    </div>
  )
}

export default ModalsEditar