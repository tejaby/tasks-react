import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="p-10 rounded bg-indigo-900 mb-2" onSubmit={handleSubmit}>
        <h1 className="text-white text-2xl font-bold capitalize mb-2">
          Añadir tareas
        </h1>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="p-1 w-full mb-2"
        />
        <textarea
          placeholder="Ingresar descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="p-1 w-full mb-2"
        />
        <button className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500 hover:scale-105">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
