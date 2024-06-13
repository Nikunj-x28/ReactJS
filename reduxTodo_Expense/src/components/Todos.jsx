import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => {
    return state.todo.todos;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
