
import { Header } from './components/Header';
import { Searchbar } from './components/Searchbar';
import { Tasklist } from './components/Tasklist';
import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Searchbar />
        <Tasklist />
      </div>
    </div>
  )
}
