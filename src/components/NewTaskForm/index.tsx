import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PlusCircle } from "phosphor-react";
import styles from "./styles.module.css";

import { TaskProps } from "../../App";

interface NewTaskProps {
  onNewTask: (task: TaskProps) => void;
}

export function NewTaskForm({ onNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event!.preventDefault();
    onNewTask({
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    });

    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        onChange={handleNewTaskChange}
        type="text"
        value={newTask}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
