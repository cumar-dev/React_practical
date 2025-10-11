import { useReducer, useState } from "react";

const initialState = [];
const reducer = (state, action)=> {
switch(action.type) {
    case "Add":
        return [...state, action.payload];
    case "Toggle":
        return state.map((todo)=> todo.id === action.payload ? {...todo, completed: !todo.completed}: todo);
    case "Edit":
        return state.map((todo)=> todo.id === action.payload ? {...todo, Text: action.payload.newText}: todo);    
    case "Delete":
        return state.filter((todo)=> todo.id !== action.payload);
    case "Clear All":
        return [];
    default:
        return state;    
}
}
function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setToDo] = useState ('');
    const handleAdd = ()=> {
        if(todo.trim()) {
            const newToDo = {
                id: Date.now(),
                Text: todo,
                completed: false
            }
            dispatch({type: "Add",  payload: newToDo});
            setToDo("");
        }
    }
    return(
        <div>
        <h2>Todo App</h2>
        <input type="text" placeholder="Enter a new todo" value={todo} onChange={(e)=> setToDo(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={()=> dispatch({type: "Clear All"})}>Clear All</button>
        <ul>
            {
                state.map((todo)=>(
                    <li key={todo.id}>
                        <span 
                        style={{textDecoration: todo.completed ? "line-through" : "none"}} 
                        onClick={
                            ()=> dispatch({type: "Toggle", payload: todo.id})
                        }>
                            {todo.Text}
                        </span>
                        <button onClick={()=> {
                            const newText = prompt("Edit your to do", todo.Text);
                            if(newText) {
                                dispatch({type: "Edit", payload: {id: todo.id, newText}})
                            }
                            console.log(newText);
                        }}>Edit</button>
                        <button onClick={()=> dispatch({type: "Delete", payload: todo.id})}>Delete</button>
                    </li>
                ))
            }
        </ul>
        </div>
    )
}

export default TodoApp;