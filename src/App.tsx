
import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import { Task } from './interfaces/Task';

import styles from './App.module.css';

import './global.css';

export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newDescripton, setNewDescripton] = useState('');

  function handleAddNewTask() {
    const newId = Math.max(...tasks.map(i => i.id), 0) + 1;

    const newTask = {
      id: newId,
      description: newDescripton,
      done: false
    }

    setTasks([...tasks, newTask]);
    setNewDescripton('');
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(
      task => task.id !== id
    );
    setTasks(tasksWithoutDeletedOne);
  }

  function handleChangeDescription(event: any) {
      setNewDescripton(event.target.value);
      event.target.setCustomValidity('');
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
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onChangeDone={handleChangeDone}
        />
      </div>
    </div>
  )
}
