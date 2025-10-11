import { useReducer } from "react";

const initialState = {text: ""};
const reducer = (state, action)=> {
switch(action.type) {
    case "change":
        return {text: action.value};
    case "Reset":
        return initialState;
    default:
        return state;        
}
}
function InputData() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <div>
             <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "change", value: e.target.value })
        }
      />
            <p>Typed: {state.text}</p>
            <button onClick={()=> dispatch({type: "Reset"})}>Reset</button>
        </div>
        </>
    )
}
export default InputData;