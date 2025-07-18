import React from 'react'
import { useState, useEffect } from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRecuperarDatosEliminar from '../components/ComponenteRecuperarDatosEliminar'
import './modals.styles.css'

const ModalsEliminar = ({isOpen, closeModal}: InterfaceModalsProps) => {
     
  const [hayDatos, setHayDatos] = useState(false)

  useEffect(() => {
    if (isOpen != false) {
      return
    } else {
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
    }

  }, [isOpen])

  if (isOpen != true){
    return null
  } else {
    if (hayDatos == true) {
      return (
        <div className="ModalsBox">
          <div className="ModalsContent">
            <h1>MENÚ ELIMINAR</h1>
            <ComponenteRecuperarDatosEliminar/>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="ModalsBox">
          <div className="ModalsContent">
            <h1>MENÚ ELIMINAR</h1>
            <p>No hay datos para eliminar</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )
    }
  }

  
}

export default ModalsEliminar