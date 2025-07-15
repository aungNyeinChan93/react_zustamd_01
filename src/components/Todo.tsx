import React from "react";
import useTodoStore, { type Todo } from "../stores/TodoStore";

const Todo = () => {
  const { todos, setTodo, removeTodo, toggleStatus } = useTodoStore(
    (store) => store
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todoSubmit = (formdata: any) => {
    if (formdata.get("task") !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        task: formdata.get("task"),
        completed: false,
      };
      setTodo(newTodo);
    }
  };

  return (
    <React.Fragment>
      <section>
        <form className="w-2/4 mx-auto p-4 my-10" action={todoSubmit}>
          <input type="text" name="task" id="" />
          <button type="submit">Add</button>
        </form>

        <ul className="w-2/4 mx-auto">
          {todos?.map((todo) => (
            <li
              onClick={() => toggleStatus(todo.id)}
              className={`${
                todo.completed ? "bg-green-400" : "bg-red-500"
              } p-4 rounded-2xl my-2 relative`}
              key={todo.id}
            >
              {todo.task}
              <span
                onClick={() => removeTodo(todo.id)}
                className=" absolute right-0 me-3 text-slate-200 cursor-pointer"
              >
                Delete
              </span>
            </li>
          ))}
        </ul>

        {/* <ReactQuill
          theme="snow"
          className="w-30 h-30 bg-slate-600 text-white"
        /> */}
      </section>
    </React.Fragment>
  );
};

export default Todo;
