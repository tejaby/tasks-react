import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-indigo-400 h-screen">
      <div className="container bg-transparent mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
