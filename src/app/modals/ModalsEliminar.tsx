import React from 'react'
import { useState, useEffect } from 'react'
import { InterfaceModalsProps } from '../interfaces/InterfaceModalsProps'
import ComponenteRecuperarDatosEliminar from '../components/ComponenteRecuperarDatosEliminar'
import './modals.styles.css'
import { InterfaceDatosEventos } from '../interfaces/InterfaceDatosEventos'
import { obtenerDatosEventos } from '../firebase/Promesas'
import ComponenteEliminar from '../components/ComponenteEliminar'

const ModalsEliminar = ({isOpen, closeModal}: InterfaceModalsProps) => {

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
    if (hayDatos == true) {
      return (
        <div className="ModalsBox">
          <div className="ModalsContent">
            <h1>MENÚ ELIMINAR</h1>
            <ComponenteEliminar/>
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