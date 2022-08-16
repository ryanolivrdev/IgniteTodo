import { Card } from "../Card";

import styles from "./styles.module.css";
import { TaskProps } from "../../App";
import Clipboard from "../../assets/Clipboard.svg";

interface NewTaskProps {
  Tasks: TaskProps[];
  onDeleteTask: (task: string) => void;
  onDoneTask: (taskToDelete: string) => void;
}

export function TasksList({ Tasks, onDeleteTask, onDoneTask }: NewTaskProps) {
  const tasksCounter = Tasks.length;

  const tasksDoneCounter = () => {
    return Tasks.filter((task) => task.isCompleted === true).length;
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.subtitles}>
        <p className={styles.createdTasks}>
          Tarefas criadas <span className={styles.counter}>{tasksCounter}</span>
        </p>
        <p className={styles.completedTasks}>
          Concluídas
          <span className={styles.counter}>
            {`${tasksDoneCounter()} de ${tasksCounter}`}
          </span>
        </p>
      </div>
      {Tasks.length === 0 && (
        <div className={styles.withoutTasks}>
          <img src={Clipboard} alt="Clipboard" />
          <p>
            Você ainda não tem tarefas cadastradas
            <span> Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      )}
      {Tasks.length !== 0 &&
        Tasks.map((task: TaskProps) => {
          return (
            <Card
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onDoneTask={onDoneTask}
            />
          );
        })}
    </div>
  );
}
