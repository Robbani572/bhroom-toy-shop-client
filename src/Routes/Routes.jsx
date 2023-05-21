import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import CardDetails from '../pages/CardDetails/CardDetails';
import Login from '../pages/Athenticate/Login/Login';
import Register from '../pages/Athenticate/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blogs from '../pages/Blogs/Blogs';
import AllToys from '../pages/AllToys/AllToys';
import AddToys from '../pages/AddToys/AddToys';
import MyToys from '../pages/MyToys/MyToys';
import PrivetRoute from './PrivetRoute';
import UpdateToy from '../pages/UpdateToy/UpdateToy';


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
                loader: () => fetch(`https://bhroom-toy-shop-server-robbani572.vercel.app/products`)
            },
            {
                path: "addtoys",
                element: <PrivetRoute><AddToys></AddToys></PrivetRoute>
            },
            {
                path: "update/:id",
                element: <PrivetRoute><UpdateToy></UpdateToy></PrivetRoute>,
                loader: ({params}) => fetch(`https://bhroom-toy-shop-server-robbani572.vercel.app/products/${params.id}`)
                
            },
            {
                path: "mytoys",
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>,
            },
            {
                path: "details/:id",
                element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://bhroom-toy-shop-server-robbani572.vercel.app/products/${params.id}`)
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