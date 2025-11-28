import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import NotFound from "./Components/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import UserList from "./Pages/UserList";
import UserProfile from "./Pages/UserProfile";
import ProductsDetails from "./Pages/ProductsDetails";
import Products from "./Pages/Products";
import DashboardLayout from "./Components/DashboardLayout";
import { Children } from "react";
import OverView from "./Components/OverView";
import Settings from "./Components/Settings";
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
            },
            {
                path: "products",
                element: <Products /> 
            },
            {
                 path: "products/:categoryId",
                 element: <ProductsDetails />
            },
            {
                path: "products/:categoryId/:productId",
                element: <ProductsDetails />
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                         element: <OverView />
                    },
                    {
                        path: "settings",
                        element: <Settings />
                    }
                ]
            }
            
        ],
    },
]);

export default router;