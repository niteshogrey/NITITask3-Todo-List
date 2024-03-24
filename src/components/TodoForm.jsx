import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handlesubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className="Todoform" onSubmit={handlesubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="what is the task?"
        onChange={(e)=> setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
