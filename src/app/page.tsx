
import styles from './page.module.css'
import './globals.css';

export default function Home() {
  return (
    <div className="grid-container">
      <header className="header">
        <h1 className={styles.title}>HEADER</h1>
      </header>
      <main className="main">
        <h1 className={styles.title}>MAIN</h1>
      </main>
      <footer className="footer">
        <h1 className={styles.title}>FOOTER</h1>
      </footer>
    </div>
  );
}
