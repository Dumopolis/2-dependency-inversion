import type { ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  done: boolean;
  ownerId?: string;
};
export type TasksListProps = {
  getTasks: () => Task[];
  saveTasks: (task: Task[]) => void;
  renderChangeOwner: (props: {
    ownerId?: string;
    onUpdate: (id: string) => void;
  }) => ReactNode;
};
