export const RemoveTask = ({ onDelete }: any) => {
  return <button onClick={() => onDelete()}>Delete task</button>;
};
