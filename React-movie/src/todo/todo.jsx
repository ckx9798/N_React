import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    if (todo === "") {
      return;
    } else {
      setTodos((currentArray) => [todo, ...currentArray]);
      setTodo("");
    }
  };
  return (
    <>
      <h1>My Todo({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
