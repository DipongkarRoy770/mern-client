
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../components/About";
import Service from "../components/Service";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'service',
                element: <Service></Service>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
        ]
    },
]);