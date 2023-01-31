import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-2xl font-bold capitalize text-center">
        No hay tareas aún
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
