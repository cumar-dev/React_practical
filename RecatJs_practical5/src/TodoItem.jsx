import React, {useContext,} from 'react'
import TodoContext from './TodoContext'

const TodoItem = ({todo}) => {
  const {dispatch} = useContext(TodoContext);
    const handleEdit = () => {
    const newText = prompt("Edit your todo:", todo.text);
    if (newText) {
      dispatch({
        type: "Edit",
        payload: { id: todo.id, newText },
      });
    }
    console.log(newText);
  };

  const handleDelete = () => {
    dispatch({
      type: "Delete",
      payload: todo.id,
    });
  };
  return (
   <>
   <li>
    <span 
     style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
    onClick={()=> dispatch({type: "toggle", payload: todo.id})}>
     {todo.text}
      </span>
    <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
   </li>
   </>
  )
}

export default TodoItem;