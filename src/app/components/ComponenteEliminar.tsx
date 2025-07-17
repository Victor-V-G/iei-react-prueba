'use client'

import { useState, useEffect } from "react"
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos"
import { InterfaceID } from "../interfaces/InterfaceID"
import ComponenteRecuperarDatosEliminar from "./ComponenteRecuperarDatosEliminar"
import { obtenerID } from "../firebase/Promesas"
import { eliminarDatosEventos } from "../firebase/Promesas"

const initialStateDatosEventos: InterfaceDatosEventos={
    nombreDelEvento: "",
    cantidadDeCupos: 0,
    tipoDelEvento: "",
    informacionDelEvento: "",
    fechaARealizarEvento: ""
}

const ComponenteEliminar = ()=> {
    const [DatosEventos, setDatosEventos] = useState(initialStateDatosEventos)
    const [indexFila, setIndexFila] = useState<number>(-1)
    const [AlmacenarIDS, setAlmacenarIDS] = useState<InterfaceID[]>([])


    const handleEliminarEventos = (d:InterfaceDatosEventos, index:number)=>{
        setDatosEventos(d);
        setIndexFila(index);
    }

    useEffect(() => {
        obtenerID().then((ids) => {
            setAlmacenarIDS(ids)
        console.log("Listado de IDs:", ids)
        })
    }, [])    

    const poscicion = AlmacenarIDS.slice(indexFila, indexFila + 1)


    useEffect(() => {
        eliminarDatosEventos(poscicion[0]).then(()=>{
            alert("eliminado con exito")
            window.location.reload();
        }).catch((error)=>{
            console.log(error)
        })
    }, [indexFila])
    

    return (
        <div>

            <ComponenteRecuperarDatosEliminar traerDatos={handleEliminarEventos}/>

        </div>
    )

}

export default ComponenteEliminar;