import {Trash} from 'phosphor-react';

import { Task } from '../interfaces/Task';

import styles from './TaskItem.module.css';

interface TaskItemProps {
    task: Task;
    onDeleteTask: (id: number) => void;
    onChangeDone: (id: number) => void;
}

export function TaskItem( { task, onDeleteTask, onChangeDone } : TaskItemProps) {
    return (
        <div
            className={styles.listItem}
        >
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
    );
}