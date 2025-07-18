import { doc, collection, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Conexion";
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos";
import { InterfaceID } from "../interfaces/InterfaceID";

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

export const obtenerID = async()=>{
    let idsDocumento:InterfaceID[] = []
        const querySnapshot = await getDocs(collection(db, "AlmacenarDatosEventos"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let idDocumentoObtenido:InterfaceID = {
           idDocumento: doc.id
        }
        idsDocumento.push(idDocumentoObtenido)
        console.log("ID obtenida:", doc.id)
        });
return idsDocumento
}

export const editarDatosEventos = async(id:InterfaceID,nuevosDatos:InterfaceDatosEventos)=>{
    const docRef = doc(db, "AlmacenarDatosEventos", id.idDocumento);
    await updateDoc(docRef, {
        nombreDelEvento: nuevosDatos.nombreDelEvento,
        cantidadDeCupos: nuevosDatos.cantidadDeCupos,
        tipoDelEvento: nuevosDatos.tipoDelEvento,
        informacionDelEvento: nuevosDatos.informacionDelEvento,
        fechaARealizarEvento: nuevosDatos.fechaARealizarEvento
    });
    console.log("Documento actualizado con ID:", id.idDocumento);
}


export const eliminarDatosEventos = async(id:InterfaceID)=>{
    await deleteDoc(doc(db, "AlmacenarDatosEventos", id.idDocumento));
    console.log("Documento Eliminado con ID:", id.idDocumento);
}





