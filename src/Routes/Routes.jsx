import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import CardDetails from '../pages/CardDetails/CardDetails';
import Login from '../pages/Athenticate/Login/Login';
import Register from '../pages/Athenticate/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blogs from '../pages/Blogs/Blogs';
import AllToys from '../pages/AllToys/AllToys';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch(`https://bhroom-toy-shop-server.vercel.app/products`)
            },
            {
                path: "details/:id",
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`https://bhroom-toy-shop-server.vercel.app/products/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;