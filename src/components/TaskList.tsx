import { TaskItem } from './TaskItem';
import { Task } from '../interfaces/Task';
import clipboard from '../assets/clipboard.svg';

import styles from './TaskList.module.css';

interface TaskProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onChangeDone: (id: number) => void;
}

export function TaskList( { tasks, onDeleteTask, onChangeDone }: TaskProps) {
    const totalTasks = tasks.length;
    const totalDone = tasks.reduce(function(sum, record) {
                            return (!record.done) ? sum : sum + 1;
                        }, 0);

    return (
        <div className={styles.tasklist}>
            <div className={styles.summary}>
                <div className={styles.taskCreated}>Tarefas criadas<span>{totalTasks}</span></div>
                <div className={styles.taskDone}>Concluídas<span>{totalDone} de {totalTasks}</span></div>
            </div>
            {totalTasks > 0 ? ( tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onChangeDone={onChangeDone}
                />
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