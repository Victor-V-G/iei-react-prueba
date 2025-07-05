'use client'

import { useState, useEffect } from "react"
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos"

const initialStateDatosEventos: InterfaceDatosEventos={
    nombreDelEvento: "",
    cantidadDeCupos: 0
}

const RegistrarDatosEvento = ()=> {
    const miStorage = window.localStorage
    const [DatosEventos, setDatosEventos] = useState(initialStateDatosEventos)
    const [AlmacenarDatosEventos, setAlmacenarDatosEventos] = useState<InterfaceDatosEventos[]>([])

    useEffect(() => {
        let ListaStr = miStorage.getItem("AlmacenarDatosEventos")
        if (ListaStr != null){
            let ListaParse = JSON.parse(ListaStr)
            setAlmacenarDatosEventos(ListaParse)
        }
    }, [])
    

    const handleDatosEventos = (name:string,value:string)=>{
        setDatosEventos(
            {...DatosEventos,[name]:value}
        )
    }

    const handleRegistrarEventos = ()=>{
        miStorage.setItem("AlmacenarDatosEventos",JSON.stringify([...AlmacenarDatosEventos,DatosEventos]))
    }

    return (
        <form>
            <h1>EVENTOS REGISTRADOS: {DatosEventos.nombreDelEvento} {DatosEventos.cantidadDeCupos} </h1>
            <input 
                type="text" 
                name="nombreDelEvento" 
                placeholder="NOMBRE DEL EVENTO"
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <input 
                type="number"
                name="cantidadDeCupos"
                placeholder="CANTIDAD DE CUPOS"
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <button
                onClick={()=>handleRegistrarEventos()}> REGISTRAR EVENTO
            </button>
        </form>
    )
}

export default RegistrarDatosEvento;