
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasklist } from './components/Tasklist';
import { Task } from './interfaces/Task';
import styles from './App.module.css';

import './global.css';
import { useState } from 'react';

export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddNewTask(description: string) {
    const newId = Math.max(...tasks.map(i => i.id), 0) + 1;

    const newTask = {
      id: newId,
      description: description,
      done: false
    }

    setTasks([...tasks, newTask]);
    setNewDescripton('');
  }

  const [newDescripton, setNewDescripton] = useState('');

  function handleChangeDescription(event: any) {
      setNewDescripton(event.target.value);
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter(
      task => task.id !== id
    ));
  }

  function handleChangeDone(id: number) {
    const newTaskList = tasks.map(i => i.id  === id ?
      {...i, done: !i.done}
      : i
    )
    setTasks(newTaskList);
  }
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask
          onAddNewTask={handleAddNewTask}
          onChangeDescription={handleChangeDescription}
          newDescripton={newDescripton}
        />
        <Tasklist
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onChangeDone={handleChangeDone}
        />
      </div>
    </div>
  )
}
