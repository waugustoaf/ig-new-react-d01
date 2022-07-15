import { useState } from 'react';
import { ITask } from '../dtos/ITask';

export function useTask() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const localStorageTasks = localStorage.getItem('@todo:tasks');
    if (localStorageTasks) {
      return JSON.parse(localStorageTasks);
    }
    return [];
  });

  function addTask(title: string) {
    const newTasks = [...tasks, { id: Math.random(), title, done: false }];

    setTasks(newTasks);

    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));

    return newTasks;
  }

  function removeTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);

    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));

    return newTasks;
  }

  function toggleTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    });

    setTasks(newTasks);

    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));

    return newTasks;
  }

  return { tasks, addTask, removeTask, toggleTask };
}
