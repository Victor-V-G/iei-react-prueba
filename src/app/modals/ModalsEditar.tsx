import React, { useState, useEffect } from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteFormularioEditarDatos from '../components/ComponenteFormularioEditarDatos'
import './modals.styles.css'
import styles from '../page.module.css'

const ModalsEditar = ({ isOpen, closeModal }: InterfaceModalsProps) => {
  
  const [hayDatos, setHayDatos] = useState(false)

  useEffect(() => {
    if (isOpen != false) 
      return
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

  if (isOpen != true){
    return null
  } else {
    if (hayDatos) {
      return (
        <div className="ModalsBox">
          <div className="ModalsContent">
            <h1>MENÚ EDITAR EVENTOS</h1>
            <ComponenteFormularioEditarDatos />
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="ModalsBox">
          <div className="ModalsContent">
            <h1>MENÚ EDITAR</h1>
            <p>No hay datos para editar</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )
    }
  }
  
}

export default ModalsEditar