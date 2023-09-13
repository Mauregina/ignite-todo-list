
import { ChangeEvent, useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import { Task } from './interfaces/Task';

import styles from './App.module.css';

import './global.css';

export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newDescripton, setNewDescripton] = useState('');

  function addNewTask() {
    const newId = Math.max(...tasks.map(i => i.id), 0) + 1;

    const newTask = {
      id: newId,
      description: newDescripton,
      done: false
    }

    setTasks([...tasks, newTask]);
    setNewDescripton('');
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(
      task => task.id !== id
    );
    setTasks(tasksWithoutDeletedOne);
  }

  function changeDone(id: number) {
    const newTaskList = tasks.map(i => i.id  === id ?
      {...i, done: !i.done}
      : i
    )
    setTasks(newTaskList);
  }


  function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
    setNewDescripton(event.target.value);
    event.target.setCustomValidity('');
  }
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask
          onAddNewTask={addNewTask}
          onChangeDescription={handleChangeDescription}
          newDescripton={newDescripton}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onChangeDone={changeDone}
        />
      </div>
    </div>
  )
}
