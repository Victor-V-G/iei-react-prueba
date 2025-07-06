import React from 'react'
import { useState, useEffect } from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRecuperarDatosEliminar from './ComponenteRecuperarDatosEliminar'
import './modals.styles.css'

const ModalsEliminar = ({isOpen, closeModal}: InterfaceModalsProps) => {
     const [hayDatos, setHayDatos] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const miStorage = window.localStorage
    let ListaStr = miStorage.getItem("AlmacenarDatosEventos")
    let ListaParse = []

    if (ListaStr != null) {
      ListaParse = JSON.parse(ListaStr)
    } else {
      ListaParse = []
    }
    if (ListaParse.length > 0) {
      setHayDatos(true)
    } else {
      setHayDatos(false)
    }
  }, [isOpen])

  if (!isOpen){
    return null
  }

  if (hayDatos) {
    return (
      <div className="ModalsBox">
        <div className="ModalsContent">
          <h1>MODALS ELIMINAR</h1>
          <ComponenteRecuperarDatosEliminar traerDatos={() => {}}  />
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="ModalsBox">
        <div className="ModalsContent">
          <h1>MODALS ELIMINAR</h1>
          <p>No hay datos para eliminar</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    )
  }
}

export default ModalsEliminar