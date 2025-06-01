import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import type { Task, TasksListProps } from "../lib/types";

export function useTasks({
  getTasks,
  saveTasks,
}: Pick<TasksListProps, "getTasks" | "saveTasks">) {
  const [tasks, setTasks] = useState<Task[]>(() => getTasks());

  const addTask = (value: string) => {
    setTasks((tasks) => [
      { id: nanoid(), title: value, done: false },
      ...tasks,
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const toggleCheckTask = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const updateOwner = (id: string, ownerId: string) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, ownerId } : task))
    );
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks, saveTasks]);

  return {
    tasks,
    addTask,
    removeTask,
    toggleCheckTask,
    updateOwner,
  };
}
