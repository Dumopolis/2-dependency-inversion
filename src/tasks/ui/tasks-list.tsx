import { TaskItem } from "./task-item";
import { useTasks } from "../model/use-tasks";
import { CreateTaskForm } from "./create-task-from";
import { ToggleTask } from "./toggle-task";
import { RemoveTask } from "./remove-task";
import type { TasksListProps } from "../lib/types";

export function TasksList({
  saveTasks,
  getTasks,
  renderChangeOwner,
}: TasksListProps) {
  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } = useTasks(
    { saveTasks, getTasks }
  );

  return (
    <div>
      <CreateTaskForm onCreate={addTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          actions={
            <>
              <ToggleTask
                done={task.done}
                onToggle={toggleCheckTask.bind(null, task.id)}
              />
              <RemoveTask onDelete={removeTask.bind(null, task.id)} />
              {renderChangeOwner({
                ownerId: task.ownerId,
                onUpdate: updateOwner.bind(null, task.id),
              })}
            </>
          }
        />
      ))}
    </div>
  );
}
