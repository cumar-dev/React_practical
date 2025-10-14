import Counter from "./CounterWithReducer";
import Header from "./Header";
import InputData from "./SimpelInput";
import TodoApp from "./TodoAppWhithReducer";
import ToggleBtn from "./Togglr";
import UserContext from "./UserContext"
import { useState } from "react";
import  ThemeContext  from "./ThemeContext"
import ThemedComponent from "./ThemedComponent";
function App() {
    const [user, setUser] = useState ({id: 1, name: "Omar", role: "Student"}); 
    const [theme, setTheme] = useState('light');
    const toggleTheme = ()=> {
        setTheme((prev)=> prev === "light" ? "dark" : "light");
    }
    return(
        <>
        <Counter />
        <ToggleBtn />
        <InputData />
        <TodoApp />
      <UserContext.Provider value={user}>
      <h1>My Application</h1>
    {/* < Header user={user} /> */}
    <Header />
     </UserContext.Provider>

    <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"}</button>
  <ThemedComponent />
</ThemeContext.Provider>
        </>
    )
}

export default App;