import {PlusCircle} from 'phosphor-react';

import styles from './NewTask.module.css';

interface NewTaskProps {
    onAddNewTask: () => void;
    onChangeDescription: (event: any) => void;
    newDescripton: string;
}

export function NewTask( { onAddNewTask, onChangeDescription, newDescripton } : NewTaskProps) {
    const isNewDescriptionEmpty = newDescripton.length === 0;
        
    function handleAddNewTask(event: any) {
        event?.preventDefault();
        onAddNewTask();
    }

    function handleNewDescriptionInvalid(event: any) {
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