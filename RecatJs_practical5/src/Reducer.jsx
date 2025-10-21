export const initialState = [];
export const reducer = (state, action)=> {
switch(action.type) {
    case "add":
        return [...state, action.payload];
    case "toggle":
        return state.map((todo)=> 
        todo.id === action.payload ? {...todo, completed: !todo.completed}
    : todo);
    case "Edit":
        return state.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload.newText}: todo);    
    case "Delete":
        return state.filter((todo)=> todo.id !== action.payload);
    case "Clear All":
        return [];
    case "Default":
        return state;        
}
}