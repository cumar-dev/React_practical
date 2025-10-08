import { useReducer } from "react";

 const initialState = {count : 0};
    const reducer = (state, action) => {
        switch(action.type) {
            case "Incriment":
                return {count : state.count + 1};
            case "Decrement":
                return {count : state.count - 1};
            case "Reset":
                return initialState;
            default:
                return state;            
        }
    }
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
   return(
        <>
        <div>
        <h2>Count: {state.count}</h2>
        <button onClick={()=> dispatch({type: "Incriment"})}>Incriment</button>
        <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>
        <button onClick={()=> dispatch({type: "Reset"})}>Reset</button>
        </div>
        </>
    )
}
export default Counter;