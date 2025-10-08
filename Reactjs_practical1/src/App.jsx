import Greeting from "./Greeting";
import Layout from "./Layout";
import BlogMessage from "./script";
import State from "./State";
import Toggle from "./Toggle";
import ChangeNames from "./ChangeNames";
import FavoriteColors from "./Colors";
import Form from "./Form";
import UserInformation from "./Objects";
import Items from "./Arrays";
import ToDoApp from "./Todo_list";
import ShoppingCart from "./ShoppingCart";
function App() {
    // const CurrentUser = "Cade";
    // const role = "Admin"
   
   
    return(
        
        <>
        <BlogMessage />
        <Layout />
        <Greeting 
        // CurrentUser={CurrentUser}
        // Role={role} 
        CurrentUser = {"hamuuda"}
        Role = {"Super Admin"}
        />

        <Greeting 
        CurrentUser={"Khaalid"}
        Role={"student"} 
        />
        <State />
        <Toggle />
        <ChangeNames />
        <FavoriteColors />
        <Form />
        <UserInformation />
        <Items />
        <ToDoApp />
        < ShoppingCart />
<h1>Hello World</h1>
<h1>Hello my name is Omar Abdi Ahmed</h1>
<form>
    <label htmlFor="username">
        Username:
    </label>
    <input type="text" id="username" />
</form>

</>
    ) 
}

// function App() {
//     const myName = "omar abdi ahmed";
//     return <h1>{myName}</h1>
// const password = 12434;
// return <h1>{password == 12434 ? "welcome" : "go back"}</h1>
//     const project = "no transmitted";
//     return <h1>{project == "transmitted" && "welcome" }</h1>

// const students = ["hamuuda", "sharfudiin", "omar tood"];
// return(
//     students.map(student => <h1>{student}</h1>)
// )
// }

export default App;



