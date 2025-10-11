import { useReducer } from "react";

const initialState = {isOn: false};
const reducer = (state, action)=> {
switch(action.type) {
    case "Toggle":
        return {isOn: !state.isOn};
    default:
        return state;    
}
}
function ToggleBtn() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <div>
            <h1>The light is {state.isOn ? "On" : "off"}</h1>
            <button onClick={()=> dispatch({type: "Toggle"})}>Toggle light</button>
        </div>
        </>
    )
}

export default ToggleBtn;