
import { InterfaceDatosEventos } from "./InterfaceDatosEventos"

export interface TraerDatosProps{
    traerDatos: (d: InterfaceDatosEventos, index: number) => void
}