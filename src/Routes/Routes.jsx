import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import CardDetails from '../pages/CardDetails/CardDetails';


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
            }
        ]
    }
])

export default router;