'use client'

import { useState, useEffect } from "react"
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos"
import ComponenteRecuperarDatosEditar from "./ComponenteRecuperarDatosEditar"

const initialStateDatosEventos: InterfaceDatosEventos={
    nombreDelEvento: "",
    cantidadDeCupos: 0,
    tipoDelEvento: "",
    informacionDelEvento: "",
    fechaARealizarEvento: ""
}

const ComponenteFormularioEditarDatos = ()=> {
    const miStorage = window.localStorage
    const [DatosEventos, setDatosEventos] = useState(initialStateDatosEventos)
    const [AlmacenarDatosEventos, setAlmacenarDatosEventos] = useState<InterfaceDatosEventos[]>([])
    const [indexFila, setIndexFila] = useState<number | null>(null);

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

    const handleRegistrarEventos = () => {
        let nuevaLista = [...AlmacenarDatosEventos]
        if (indexFila !== null) {
            nuevaLista[indexFila] = DatosEventos;
        }
        setAlmacenarDatosEventos(nuevaLista);
        miStorage.setItem("AlmacenarDatosEventos", JSON.stringify(nuevaLista));
        setDatosEventos(initialStateDatosEventos);
        setIndexFila(null);
    }

    const handleEditarEventos = (d:InterfaceDatosEventos, index:number)=>{
        setDatosEventos(d);
        setIndexFila(index);
    }

    return (
        <div>

            <ComponenteRecuperarDatosEditar traerDatos={handleEditarEventos}/>

            <form>
                <h1>EDITAR EVENTOS</h1>
                <input 
                    type="text" 
                    name="nombreDelEvento" 
                    value={DatosEventos.nombreDelEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <input 
                    type="number"
                    name="cantidadDeCupos"
                    value={DatosEventos.cantidadDeCupos}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <label htmlFor="tipoDelEvento">ELIGE UN TIPO DE EVENTO</label> <br />
               <select 
                    name="tipoDelEvento" 
                    id="tipoDelEvento"
                    value={DatosEventos.tipoDelEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Full Stack">Full Stack</option>
                </select> <br />
                <textarea
                    id="informacionDelEvento"
                    name="informacionDelEvento"
                    value={DatosEventos.informacionDelEvento}
                    rows={4}
                    cols={50}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <label>FECHA A REALIZARSE EL EVENTO</label> <br />
                <input 
                    type="date"
                    name="fechaARealizarEvento"
                    value={DatosEventos.fechaARealizarEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <br />
                <button
                    onClick={()=>handleRegistrarEventos()}> ACTUALIZAR
                </button> <br />
            </form>

        </div>
    )
}

export default ComponenteFormularioEditarDatos;