import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
    onAddNewTask: () => void;
    onChangeDescription: (event: ChangeEvent<HTMLInputElement>) => void;
    newDescripton: string;
}

export function NewTask( { onAddNewTask, onChangeDescription, newDescripton } : NewTaskProps) {
    const isNewDescriptionEmpty = newDescripton.length === 0;
        
    function handleAddNewTask(event: FormEvent) {
        event?.preventDefault();
        onAddNewTask();
    }

    function handleNewDescriptionInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    return (
        <form onSubmit={handleAddNewTask} className={styles.container}>
            <input
                type='text'
                placeholder='Adicione uma nova tarefa'
                value={newDescripton}
                onChange={onChangeDescription}
                onInvalid={handleNewDescriptionInvalid}
                required
            />
            <button
                type='submit'
                disabled={isNewDescriptionEmpty}
            >
                Criar <PlusCircle />
            </button>
        </form>
    )
}