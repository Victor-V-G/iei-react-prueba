'use client'

import React from "react";
import { useEffect, useState } from "react";
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos";


export const ComponenteMostrarDatos = () =>{
    const miStorage = window.localStorage
    const [AlmacenarDatosEventos, setAlmacenarDatosEventos] = useState<InterfaceDatosEventos[]>([])

    useEffect(() => {
        let ListaStr = miStorage.getItem("AlmacenarDatosEventos")
        if (ListaStr != null){
            let ListaParse = JSON.parse(ListaStr)
            setAlmacenarDatosEventos(ListaParse)
        }
    }, [])

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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default ComponenteMostrarDatos;