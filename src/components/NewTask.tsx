import styles from './NewTask.module.css';
import {PlusCircle} from 'phosphor-react';

interface NewTaskProps {
    onAddNewTask: (description: string) => void;
    onChangeDescription: (event: any) => void;
    newDescripton: string;
}

export function NewTask( { onAddNewTask, onChangeDescription, newDescripton } : NewTaskProps) {
    return (
        <div className={styles.container}>
            <input
                type='text'
                placeholder='Adicione uma nova tarefa'
                value={newDescripton}
                onChange={onChangeDescription}
            />
            <button
                onClick={() => onAddNewTask(newDescripton)}
                disabled={newDescripton === ''}
            >
                Criar <PlusCircle />
            </button>
        </div>
    )
}