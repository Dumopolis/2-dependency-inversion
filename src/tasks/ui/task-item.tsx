import type { ReactNode } from "react";
import { UserSelect } from "../../user/ui/user-select";

export const TaskItem = ({
  title,
  actions,
}: {
  title: string;

  actions: ReactNode;
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      {actions}
      <div>{title}</div>
    </div>
  );
};
