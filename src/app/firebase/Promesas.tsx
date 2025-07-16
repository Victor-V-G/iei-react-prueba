import { collection, addDoc } from "firebase/firestore";
import { db } from "./Conexion";
import { InterfaceDatosEventos } from "../interfaces/InterfaceDatosEventos";

export const registrarDatosEventos = async(d:InterfaceDatosEventos)=> {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "AlmacenarDatosEventos"), d);
    console.log("Document written with ID: ", docRef.id);
}