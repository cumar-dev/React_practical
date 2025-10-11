import Counter from "./CounterWithReducer";
import Header from "./Header";
import InputData from "./SimpelInput";
import TodoApp from "./TodoAppWhithReducer";
import ToggleBtn from "./Togglr";

function App() {
    const user = {id: 1, name: "Omar", role: "Student"}
    return(
        <>
        <Counter />
        <ToggleBtn />
        <InputData />
        <TodoApp />
        <h1>My Applicantion</h1>
        <Header user ={user} />
        </>
    )
}

export default App;