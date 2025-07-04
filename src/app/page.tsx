
import styles from './page.module.css'
import './globals.css';

export default function Home() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="headerBox">
          <h1 className={styles.headerFont}>GESTOR DE EVENTOS</h1>
          <nav className="listaBotones">
            <ul><button>REGISTRAR</button></ul>
            <ul><button>MOSTRAR</button></ul>
            <ul><button>EDITAR</button></ul>
            <ul><button>ELIMINAR</button></ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <h1 className={styles.tituloPresentacionFont}>CONVIÉRTETE <br />EN WEB DEVELOPER </h1> <br />
        <h3 className={styles.subtituloPresentacionFont}>Ofrecemos Bootcamp intensivo en Front-End, Back-End y Full Stack <br /> alrededor de todo Chile para impulsar tu carrera digital.</h3> <br />
        <div className='eventosARealizar'>
          <h3 className={styles.subtituloEventosARealizar}>EVENTOS A REALIZAR:</h3>
          <div className='mostrarEventos'>

          </div>
        </div>
      </main>
      <footer className="footer">
        <h1 className={styles.headerFont}>PROXIMAMENTE A REALIZAR MUCHOS MAS EVENTOS!</h1>
      </footer>
    </div>
  );
}
