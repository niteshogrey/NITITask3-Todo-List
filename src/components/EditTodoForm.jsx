import React, {useState} from "react";

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handlesubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className="Todoform" onSubmit={handlesubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e)=> setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodoForm;
