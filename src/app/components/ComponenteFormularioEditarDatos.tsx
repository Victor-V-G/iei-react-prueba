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

    const [MostrarErrorNombreDelEvento, setMostrarErrorNombreDelEvento] = useState("")
    const [MostrarErrorCantidadDeCupos, setMostrarErrorCantidadDelEvento] = useState("")
    const [MostrarErrorTipoDelEvento, setMostrarErrorTipoDelEvento] = useState("")
    const [MostrarErrorInformacionDelEvento, setMostrarErrorInformacionDelEvento] = useState("")
    const [MostrarErrorFechaARealizarEvento, setMostrarErrorFechaARealizarEvento] = useState("")

    const [validarNombreDelEvento, setValidarNombreDelEvento] = useState(false)
    const [validarCantidadDeCupos, setValidarCantidadDeCupos] = useState(false)
    const [validarTipoDelEvento, setValidarTipoDelEvento] = useState(false)
    const [validarInformacionDelEvento, setValidarInformacionDelEvento] = useState(false)
    const [validarFechaARealizarEvento, setValidarFechaARealizarEvento] = useState(false)

    useEffect(() => {
        let ListaStr = miStorage.getItem("AlmacenarDatosEventos")
        if (ListaStr != null){
            let ListaParse = JSON.parse(ListaStr)
            setAlmacenarDatosEventos(ListaParse)
        }
    }, [])
    

    const handleDatosEventos = (name: string, value: string) => {
        const nuevoDatos = { ...DatosEventos, [name]: value }
        setDatosEventos(nuevoDatos)

        if (nuevoDatos.nombreDelEvento.length < 5) {
            setMostrarErrorNombreDelEvento("EL CAMPO DEBE CONTENER MAS DE 4 CARACTERES")
            setValidarNombreDelEvento(false)
        } else if (nuevoDatos.nombreDelEvento.match(/\d/)){
            setMostrarErrorNombreDelEvento("EL CAMPO NO PUEDE TENER CARACTERES NUMERICOS")
            setValidarNombreDelEvento(false)
        } else {
            setMostrarErrorNombreDelEvento("")
            setValidarNombreDelEvento(true)
        }


        if (nuevoDatos.cantidadDeCupos < 5) {
            setMostrarErrorCantidadDelEvento("Debe ingresar al menos 5 participante")
            setValidarCantidadDeCupos(false)
        } else if (nuevoDatos.cantidadDeCupos > 30) {
            setMostrarErrorCantidadDelEvento("El máximo de participantes es 30")
            setValidarCantidadDeCupos(false)
        } else {
            setMostrarErrorCantidadDelEvento("")
            setValidarCantidadDeCupos(true)
        }


        if (nuevoDatos.tipoDelEvento === "") {
            setMostrarErrorTipoDelEvento("Debe seleccionar un tipo de evento")
            setValidarTipoDelEvento(false)
        } else {
            setMostrarErrorTipoDelEvento("")
            setValidarTipoDelEvento(true)
        }


        if (nuevoDatos.informacionDelEvento.length < 10) {
            setMostrarErrorInformacionDelEvento("EL CAMPO DEBE CONTENER MAS DE 10 CARACTERES")
            setValidarInformacionDelEvento(false)
        } else {
            setMostrarErrorInformacionDelEvento("")
            setValidarInformacionDelEvento(true)
        }
        

        if (nuevoDatos.fechaARealizarEvento) {
            const fechaActual = new Date()
            fechaActual.setHours(0, 0, 0, 0)
            const fechaIngresada = new Date(nuevoDatos.fechaARealizarEvento)

            if (fechaIngresada < fechaActual) {
                setMostrarErrorFechaARealizarEvento("LA FECHA NO PUEDE SER ANTERIOR A HOY")
                setValidarFechaARealizarEvento(false)
            } else {
                setMostrarErrorFechaARealizarEvento("")
                setValidarFechaARealizarEvento(true)
            }
        } else {
            setMostrarErrorFechaARealizarEvento("DEBE INGRESAR UNA FECHA")
            setValidarFechaARealizarEvento(false)
        }
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
                <h1>CAMPOS A EDITAR</h1>
                <label>NOMBRE DEL EVENTO</label> <br />
                <input 
                    type="text" 
                    name="nombreDelEvento" 
                    value={DatosEventos.nombreDelEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <span>{MostrarErrorNombreDelEvento}</span> <br />
                <label>CANTIDAD DE CUPOS</label> <br />
                <input 
                    type="number"
                    name="cantidadDeCupos"
                    value={DatosEventos.cantidadDeCupos}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <span>{MostrarErrorCantidadDeCupos}</span> <br />
                <label>TIPO DE EVENTO</label> <br />
               <select 
                    name="tipoDelEvento" 
                    id="tipoDelEvento"
                    value={DatosEventos.tipoDelEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Full Stack">Full Stack</option>
                </select> <br />
                <span>{MostrarErrorTipoDelEvento}</span> <br />
                <label>INFORMACION DEL EVENTO</label> <br />
                <textarea
                    id="informacionDelEvento"
                    name="informacionDelEvento"
                    value={DatosEventos.informacionDelEvento}
                    rows={4}
                    cols={50}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <span>{MostrarErrorInformacionDelEvento}</span> <br />
                <label>FECHA A REALIZARSE EL EVENTO</label> <br />
                <input 
                    type="date"
                    name="fechaARealizarEvento"
                    value={DatosEventos.fechaARealizarEvento}
                    onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
                /> <br />
                <span>{MostrarErrorFechaARealizarEvento}</span> <br />
                <br />
                <button
                    disabled={!(validarNombreDelEvento && validarCantidadDeCupos && validarTipoDelEvento && validarInformacionDelEvento && validarFechaARealizarEvento)}
                    onClick={()=>handleRegistrarEventos()}> ACTUALIZAR
                </button> <br />
            </form>

        </div>
    )
}

export default ComponenteFormularioEditarDatos;