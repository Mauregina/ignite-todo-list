import {Trash} from 'phosphor-react';
import styles from './Tasklist.module.css';

export function Tasklist() {
    return (
        <div className={styles.tasklist}>
            <div className={styles.summary}>
                <div className={styles.taskCreated}>Tarefas criadas<span>5</span></div>
                <div className={styles.taskDone}>Concluídas<span>5 de 10</span></div>
            </div>
            <div className={styles.listItem}>
                <input type='checkbox' />
                <div>Coluna 1 Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1</div>
                <Trash />
            </div>
            <div className={styles.listItem}>
                <input type='checkbox' />
                <div>Coluna 1 Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1</div>
                <Trash />
            </div>
        </div>
    )
}