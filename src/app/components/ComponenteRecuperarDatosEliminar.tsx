'use client'

import React from "react";
import { useEffect, useState } from "react";
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos";
import { obtenerDatosEventos } from "../firebase/Promesas";

export const ComponenteRecuperarDatosEliminar = () =>{
    const [AlmacenarDatosEventos, setAlmacenarDatosEventos] = useState<InterfaceDatosEventos[]>([])

    useEffect(() => {
        obtenerDatosEventos().then((listadoObtenido)=>{
            setAlmacenarDatosEventos(listadoObtenido)
        }).catch((error)=>{
            alert("no se pudo cargar los datos")
            console.log(error)
        })
    }, [])

    const componenteEliminar = (index: number) => {
        const confirmar = window.confirm("¿ESTA SEGURO QUE DESEA ELIMINAR ESTE EVENTO?")
        if (confirmar) {
            let nuevaLista = [...AlmacenarDatosEventos]
            nuevaLista.splice(index, 1)
            setAlmacenarDatosEventos(nuevaLista)
            window.location.reload()
        }
    };

    return ( 
        <>
            <table>
                <tbody>
                    {
                        AlmacenarDatosEventos.map((d, index)=>{
                            return(
                                <tr key={index}>
                                    <td>NOMBRE DEL EVENTO: {d.nombreDelEvento}</td>
                                    <td>CANTIDAD DE CUPOS: {d.cantidadDeCupos}</td>
                                    <td>TIPO DE EVENTO: {d.tipoDelEvento}</td>
                                    <td>INFORMACION DEL EVENTO: {d.informacionDelEvento}</td>
                                    <td>FECHA DEL EVENTO: {d.fechaARealizarEvento}</td>
                                    <td>
                                        <button
                                            onClick={()=>componenteEliminar(index)}>ELIMINAR
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default ComponenteRecuperarDatosEliminar;