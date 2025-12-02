import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRout from "./components/ProtectedRout";
import Courses from "./pages/Courses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "dashboard", 
        element: (
          <ProtectedRout element={<Dashboard />} />
        )
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "courses",
        element: (
          <ProtectedRout element={<Courses />} />
        )
      }
    ]
  }
]);

export default router;
