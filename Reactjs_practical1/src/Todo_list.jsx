import { useState } from "react";

function ToDoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleChange = ()=> {
        
        if(inputValue.trim() !== "") {
          const newToDo = {
            id: crypto.randomUUID(),
            Text: inputValue,
            completed: false
        }
            setTodos([...todos, newToDo]);
        setInputValue("");
        }else {
            alert('please enter a new to-do');
        }
        

       
    }
    return(
        <>
        
       <div>
         <h1>To-Do List</h1>
          <input type="text" placeholder="enter a new to-do" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          <button onClick={handleChange}>Add</button>
          <ul>
           {
            todos.map(todo => (
                <li key={todo.id}>{todo.Text}</li>
            ))
           }
          </ul>
       </div>
        </>
    )
}

export default ToDoApp;