import {Trash} from 'phosphor-react';
import styles from './Tasklist.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from '../interfaces/Task';

interface TaskProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onChangeDone: (id: number) => void;
}

export function Tasklist( { tasks, onDeleteTask, onChangeDone }: TaskProps) {
    function getTotalDone() {
        return tasks.reduce(function(sum, record) {
            return (!record.done) ? sum : sum + 1;
           }, 0);
    }
    
    return (
        <div className={styles.tasklist}>
            <div className={styles.summary}>
                <div className={styles.taskCreated}>Tarefas criadas<span>{tasks.length}</span></div>
                <div className={styles.taskDone}>Concluídas<span>{getTotalDone()} de {tasks.length}</span></div>
            </div>
            {tasks.length > 0 ? ( tasks.map(task => (
                <div className={styles.listItem} key={task.id}>
                    <input
                        type='checkbox'
                        checked={task.done}
                        onChange={() => onChangeDone(task.id)}
                    />
                    {task.done ? (
                        <div><del>{task.description}</del></div>
                    ) : (
                        <div>{task.description}</div>
                    )
                    }
                    
                    <Trash className={styles.delete} size={16} onClick={() => onDeleteTask(task.id)}/>
                </div>
            ))
            ) : (
                <div className={styles.noData}>
                <img src={clipboard}></img>
                <div className={styles.msg}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
            )}
        </div>
    )
}