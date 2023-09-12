import styles from './Searchbar.module.css';
import {PlusCircle} from 'phosphor-react';

export function Searchbar() {
    return (
        <div className={styles.searchbar}>
            <input type='text' placeholder='Adicione uma nova tarefa'></input>
            <button>Criar <PlusCircle /></button>
        </div>
    )
}