import React, { useState, useEffect } from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteFormularioEditarDatos from '../components/ComponenteFormularioEditarDatos'
import './modals.styles.css'
import styles from '../page.module.css'
import { InterfaceDatosEventos } from '../interfaces/InterfaceDatosEventos'
import { obtenerDatosEventos } from '../firebase/Promesas'

const ModalsEditar = ({ isOpen, closeModal }: InterfaceModalsProps) => {

  const [ObtenerListadoValidar, setObtenerListadoValidar] = useState<InterfaceDatosEventos[]>([])
  const [hayDatos, setHayDatos] = useState(false)
  
  useEffect(() => {
    obtenerDatosEventos().then((listadoObtenido)=>{
      setObtenerListadoValidar(listadoObtenido)
    }).catch((error)=>{
      alert("no se pudo cargar los datos")
      console.log(error)
    })
  }, [])

  useEffect(() => {
      if(ObtenerListadoValidar.length > 0){
        setHayDatos(true)
      } else {
        setHayDatos(false)
      }
    }, [ObtenerListadoValidar])
  

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