export const ToggleTask = ({ done, onToggle }: any) => {
  return (
    <label>
      <input type="checkbox" checked={done} onChange={onToggle} />
      done
    </label>
  );
};
