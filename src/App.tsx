import { useState } from "react";

import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import "./styles/global.css";
import styles from "./app.module.css";

import { NewTaskForm } from "./components/NewTaskForm";
import { useLocalStorage } from "./util/useLocalStorage";

export interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function HandleNewTask(task: TaskProps) {
    const tasksWithSameTitle = tasks.find(
      (prev) => prev.content === task.content
    );

    if (tasksWithSameTitle) {
      return alert("Task já cadastrada");
    }

    setTasks((prev) => [task, ...prev]);
  }

  function TaskDone(taskToDone: string) {
    const taskWithoutTaskDone = tasks.filter((task) => task.id !== taskToDone);
    const taskDone = tasks.filter((task) => task.id === taskToDone);

    taskDone[0].isCompleted = !taskDone[0].isCompleted;

    if (taskDone[0].isCompleted === true) {
      taskWithoutTaskDone.push(taskDone[0]);
    }
    if (taskDone[0].isCompleted === false) {
      taskWithoutTaskDone.unshift(taskDone[0]);
    }

    setTasks(taskWithoutTaskDone);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete
    );

    setTasks(taskWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <NewTaskForm onNewTask={HandleNewTask} />
        </div>
        <TasksList
          Tasks={tasks}
          onDeleteTask={deleteTask}
          onDoneTask={TaskDone}
        />
      </main>
    </>
  );
}
