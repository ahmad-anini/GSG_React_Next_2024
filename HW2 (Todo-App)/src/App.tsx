import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/dashboard.component";
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";
import { ITodoItem } from "./types";
import dayjs from "dayjs";

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    const savedTodos = localStorage.getItem("todosList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  const handleNewItem = (item: ITodoItem) => {
    setTodos([...todos, item]);
  };

  const handleTaskToggle = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-wallpaper bg-cover bg-center">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl bg-white bg-opacity-45 rounded-lg shadow-lg p-6">
        <div className="text-2xl mb-6 font-bold text-center text-gray-800 ">
          {dayjs().format("dddd, DD MMM")}
        </div>

        <Form onSubmit={handleNewItem} />
        <div className="mt-6">
          <Dashboard items={todos} />
        </div>
        <div className="mt-6">
          <TodoList
            items={todos}
            onToggle={handleTaskToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
