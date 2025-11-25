import { createBrowserRouter } from "react-router";
// import App from "./src/App";
import App from "./App"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import NotFound from "./Components/NotFound";
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
        ],
    },
]);

export default router;