import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";

const router = createBrowserRouter([
    {
        path: "/Signup",
        element: <Signup/>,
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
                element: <h1>Medicine</h1>
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
