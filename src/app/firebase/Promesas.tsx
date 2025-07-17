import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./Conexion";
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos";

export const registrarDatosEventos = async(d:InterfaceDatosEventos)=> {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "AlmacenarDatosEventos"), d);
    console.log("Document written with ID: ", docRef.id);
}


export const obtenerDatosEventos = async()=>{
    let listadoObtenido:InterfaceDatosEventos[] = []
        const querySnapshot = await getDocs(collection(db, "AlmacenarDatosEventos"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let DatosEventos:InterfaceDatosEventos = {
            nombreDelEvento: doc.data().nombreDelEvento,
            cantidadDeCupos: doc.data().cantidadDeCupos,
            tipoDelEvento: doc.data().tipoDelEvento,
            informacionDelEvento: doc.data().informacionDelEvento,
            fechaARealizarEvento: doc.data().fechaARealizarEvento
        }
        listadoObtenido.push(DatosEventos)
        console.log(doc.id, " => ", doc.data());
    });
return listadoObtenido
}
