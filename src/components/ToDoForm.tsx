import React, { useState, ChangeEvent, FormEvent } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}
const ToDoForm: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  const [input, setInput] = useState<string>("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    handleClick(); // Call your handleClick function to add the task
  };
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="TodoWrapper">
        <form className="TodoForm" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What is the task today"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
        <ul className="list-btn">
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none ",
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoForm;
