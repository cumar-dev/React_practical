import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import NotFound from "./Components/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import UserList from "./Pages/UserList";
import UserProfile from "./Pages/UserProfile";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "About",
                element: <About />,
            },
            {
                path: "Contect",
                element: <Contect />
            },
            {
                path: "userList",
                element: <UserList />
            },
            {
                path: "userList/:userId",
                element: <UserProfile />
            }
        ],
    },
]);

export default router;