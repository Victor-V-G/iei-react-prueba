'use client'

import { useState } from "react"
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos"
import { registrarDatosEventos } from "../firebase/Promesas"

const initialStateDatosEventos: InterfaceDatosEventos={
    nombreDelEvento: "",
    cantidadDeCupos: 0,
    tipoDelEvento: "",
    informacionDelEvento: "",
    fechaARealizarEvento: ""
}

const ComponenteRegistrarDatosEvento = ()=> {

    const [DatosEventos, setDatosEventos] = useState(initialStateDatosEventos)

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

    const handleRegistrarEventos=()=>{
        registrarDatosEventos(DatosEventos).then(()=>{
            alert("Registrado con exito")
            window.location.reload();
        }).catch((error)=>{
            alert("hubo un problema con el registro")
            console.log(error)
        })
    }

    return (
        <form>
            <h1>REGISTRAR EVENTOS</h1> <br />
            <label>NOMBRE DEL EVENTO</label> <br />
            <input 
                type="text" 
                name="nombreDelEvento" 
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <span>{MostrarErrorNombreDelEvento}</span> <br />
            <label>CANTIDAD DE CUPOS</label> <br />
            <input 
                type="number"
                name="cantidadDeCupos"
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <span>{MostrarErrorCantidadDeCupos}</span> <br />
            <label htmlFor="tipoDelEvento">ELIGE UN TIPO DE EVENTO</label> <br />
            <select 
                name="tipoDelEvento" 
                id="tipoDelEvento" 
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}>
                <option value="">-- Selecciona una opción --</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Full Stack">Full Stack</option>
            </select> <br />
            <span>{MostrarErrorTipoDelEvento}</span> <br />
            <label>INFORMACION DEL EVENTO</label> <br />
            <textarea
                id="informacionDelEvento"
                name="informacionDelEvento"
                placeholder="Ingresa la informacion del evento"
                rows={4}
                cols={50}
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <span>{MostrarErrorInformacionDelEvento}</span> <br />
            <label>FECHA A REALIZARSE EL EVENTO</label> <br />
            <input 
                type="date"
                name="fechaARealizarEvento"
                placeholder="FECHA A REALIZAR EL EVENTO"
                onChange={(e)=>handleDatosEventos(e.currentTarget.name,e.currentTarget.value)}
            /> <br />
            <span>{MostrarErrorFechaARealizarEvento}</span> <br />
            <br />
            <button
                disabled={!(validarNombreDelEvento && validarCantidadDeCupos && validarTipoDelEvento && validarInformacionDelEvento && validarFechaARealizarEvento)}
                onClick={(e)=>{
                    e.preventDefault();
                    handleRegistrarEventos();}}> REGISTRAR EVENTO
            </button> <br />

        </form>
    )
}

export default ComponenteRegistrarDatosEvento;