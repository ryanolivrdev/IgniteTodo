import { Trash } from "phosphor-react";

import styles from "./styles.module.css";
import { TaskProps } from "../../App";

import Checkbox from "@mui/material/Checkbox";

interface cardProps {
  task: TaskProps;
  onDeleteTask: (taskId: string) => void;
  onDoneTask: (taskId: string) => void;
}

export function Card({ task, onDeleteTask, onDoneTask }: cardProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleDoneTask() {
    onDoneTask(task.id);
  }

  return (
    <div className={styles.cardContainer} data-done={task.isCompleted}>
      <div className={styles.wrapper}>
        <Checkbox
          onClick={handleDoneTask}
          size="small"
          checked={task.isCompleted}
          sx={{
            color: "#4EA8DE",
            "&.Mui-checked": {
              color: "#5E60CE",
            },
          }}
        />
        <p>{task.content}</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
