import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-indigo-900 text-white p-4 rounded">
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400">{task.description}</p>
      <button
        className="bg-red-500 p-1 rounded mt-3 hover:bg-red-600 hover:scale-105"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
