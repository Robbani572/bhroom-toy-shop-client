import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/ErrorPage/LoadingPage";


const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default PrivetRoute;