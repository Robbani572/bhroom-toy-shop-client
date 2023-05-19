import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import CardDetails from '../pages/CardDetails/CardDetails';
import Login from '../pages/Athenticate/Login/Login';
import Register from '../pages/Athenticate/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


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
                path: "details/:id",
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5444/products/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;