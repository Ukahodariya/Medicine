import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";
import Medicine from "../components/medicine";
import Login from "../components/form/login";

const router = createBrowserRouter([
    {
        path: "/Signup",
        element: <Signup/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
                
            },
            {
                path: "/Medicine",
                element: <Medicine/>
            },
            {
                path: "/Healthcare",
                element: <h1>Healthcare</h1>
            },
            {
                path: "/LabTests",
                element: <h1>Lab Tests</h1>
            },
            {
                path: "/CanncerCare",
                element: <h1>Canncer Care</h1>
            },
            {
                path: "/Partnerships",
                element: <h1>Partnerships</h1>
            },
        ],
    }
]);

export default router;
