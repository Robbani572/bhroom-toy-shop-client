import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/ErrorPage/LoadingPage";


const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;