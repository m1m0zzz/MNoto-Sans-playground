import { Main } from './Main';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>MNoto-Sans Playground</h1>
        <p>MNoto-Sans (alpha) by <a href='https://x.com/yukawe' target='_blank' rel='noopener noreferrer'>ykwe</a></p>
      </header>
      <Main />
      <footer>
        &copy; {(new Date()).getFullYear()} <a href='https://m1m0zzz.github.io/' target='_blank' rel='noopener noreferrer'>mimoz</a>
      </footer>
    </div>
  );
}
