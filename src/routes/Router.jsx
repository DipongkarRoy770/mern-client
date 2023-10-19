
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../components/About";
import Service from "../components/Service";
import Login from "../components/Login";
import Register from "../components/Register";
import CheekOut from "../components/CheekOut";
import Booking from "../components/Booking";
import PrivateRoute from "./PrivateRoute";

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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <Service></Service>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: "/cheekout/:id",
                element: <PrivateRoute><CheekOut></CheekOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://mern-server-qaucfs3ij-dipongkarroy233-gmailcom.vercel.app/services/${params.id}`)
            },
            {
                path:'/booking',
                element:<PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    },
]);