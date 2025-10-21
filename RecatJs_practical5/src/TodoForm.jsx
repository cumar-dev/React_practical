import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext';

const TodoForm = () => {
    const [text, setText] = useState('');
    const {dispatch} = useContext(TodoContext);
    const handleAdd= ()=> {
        if(text.trim()) {
            const newToDo = {
                id: Date.now(),
                text,
                completed: false
            }
            dispatch({type: "add", payload: newToDo});
            setText("");
        }
    }
  return (
   <>
      <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={()=> dispatch({type: "Clear All"})}>Clear All</button>
    </div>
   </>
  )
}

export default TodoForm;