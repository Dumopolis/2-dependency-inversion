import { getFromStorage, saveToStorage } from "./lib/storage";
import { TasksList } from "./tasks/ui/tasks-list";
import { UserSelect } from "./user/ui/user-select";
const TASKS_STORAGE_KEY = "tasks";
export function App() {
  return (
    <>
      <TasksList
        getTasks={() => getFromStorage(TASKS_STORAGE_KEY, [])}
        saveTasks={saveToStorage.bind(null, TASKS_STORAGE_KEY)}
        renderChangeOwner={({ ownerId, onUpdate }) => (
          <UserSelect userId={ownerId} onChangeUserId={onUpdate} />
        )}
      />
    </>
  );
}
