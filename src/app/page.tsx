
'use client'

import styles from './page.module.css'
import './globals.css';
import { useState } from 'react';
import ModalsRegistrar from './modals/ModalsRegistrar';
import ModalsEditar from './modals/ModalsEditar';
import ModalsEliminar from './modals/ModalsEliminar';
import { ComponenteMostrarDatos } from './components/ComponenteMostrarDatos'



export default function Home() {
  const [IsModalOpenRegistrar, setIsModalOpenRegistrar] = useState(false)
  const [IsModalOpenEditar, setIsModalOpenEditar] = useState(false)
  const [IsModalOpenEliminar, setIsModalOpenEliminar] = useState(false)

  return (
    <div className="grid-container">

      <header className="header">
        <div className="headerBox">
          <h1 className={styles.headerFont}>GESTOR DE EVENTOS</h1>
          <nav className="listaBotones">
            <ul>
              <button className={styles.buttonStyle}
                onClick={()=>setIsModalOpenRegistrar(true)}>REGISTRAR
              </button>
              <ModalsRegistrar 
                isOpen={IsModalOpenRegistrar} 
                closeModal={()=>setIsModalOpenRegistrar(false)}
              />
            </ul>
            <ul>
              <button className={styles.buttonStyle}
                onClick={()=>setIsModalOpenEditar(true)}>EDITAR
              </button>
              <ModalsEditar
                isOpen={IsModalOpenEditar}
                closeModal={()=>setIsModalOpenEditar(false)}
              />
            </ul>
            <ul>
              <button className={styles.buttonStyle}
                onClick={()=>setIsModalOpenEliminar(true)}>ELIMINAR
              </button>
              <ModalsEliminar
                isOpen={IsModalOpenEliminar}
                closeModal={()=>setIsModalOpenEliminar(false)}
              />
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <h1 className={styles.tituloPresentacionFont}>CONVIÉRTETE <br />EN WEB DEVELOPER </h1> <br />
        <h3 className={styles.subtituloPresentacionFont}>Ofrecemos Bootcamp intensivo en Front-End, Back-End y Full Stack <br /> alrededor de todo Chile para impulsar tu carrera digital.</h3> <br />
        <div className='eventosARealizar'>
          <h3 className={styles.subtituloEventosARealizar}>EVENTOS A REALIZAR:</h3>
          <div className={styles.subtituloEventosARealizar}>
            <ComponenteMostrarDatos/>
          </div>
        </div>
      </main>

      <footer className="footer">
        <h1 className={styles.headerFont}>PROXIMAMENTE A REALIZAR MUCHOS MAS EVENTOS!</h1>
      </footer>

    </div>
  );
}
