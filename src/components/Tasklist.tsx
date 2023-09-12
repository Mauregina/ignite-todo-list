import {Trash} from 'phosphor-react';
import styles from './Tasklist.module.css';
import clipboard from '../assets/clipboard.svg';

export function Tasklist() {
    return (
        <div className={styles.tasklist}>
            <div className={styles.summary}>
                <div className={styles.taskCreated}>Tarefas criadas<span>5</span></div>
                <div className={styles.taskDone}>Concluídas<span>5 de 10</span></div>
            </div>

            <div className={styles.noData}>
                <img src={clipboard}></img>
                <div className={styles.msg}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
            
            <div className={styles.listItem}>
                <input type='checkbox' />
                <div>Coluna 1 Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1</div>
                <Trash size={16}/>
            </div>
            <div className={styles.listItem}>
                <input type='checkbox' />
                <div>Coluna 1 Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1Coluna 1</div>
                <Trash size={16}/>
            </div>
        </div>
    )
}