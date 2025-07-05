'use client'

import { useState, useEffect } from "react"
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos"

const initialStateDatosEventos: InterfaceDatosEventos={
    nombreDelEvento: "",
    cantidadDeCupos: 0,
    tipoDelEvento: "",
    informacionDelEvento: "",
    fechaARealizarEvento: ""
}

const ComponenteRegistrarDatosEvento = ()=> {
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
            <label htmlFor="tipoDelEvento">ELIGE UN TIPO DE EVENTO</label> <br />
            <select 
                name="tipoDelEvento" 
                id="tipoDelEvento" 
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Full Stack">Full Stack</option>
            </select> <br />
            <textarea
                id="informacionDelEvento"
                name="informacionDelEvento"
                placeholder="Ingresa la informacion del evento"
                rows={4}
                cols={50}
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <label>FECHA A REALIZARSE EL EVENTO</label> <br />
            <input 
                type="date"
                name="fechaARealizarEvento"
                placeholder="FECHA A REALIZAR EL EVENTO"
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <br />
            <button
                onClick={()=>handleRegistrarEventos()}> REGISTRAR EVENTO
            </button> <br />
        </form>
    )
}

export default ComponenteRegistrarDatosEvento;