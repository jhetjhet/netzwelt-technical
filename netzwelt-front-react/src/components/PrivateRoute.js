import { Navigate } from "react-router-dom";
import { useAuthenticationContext } from "./AuthenticationProvider";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthenticationContext();
    
    // if not authenticated navigate to login and save the current pathname to state with name 'from'
    return (
        isAuthenticated ? children : <Navigate to={'/login'} state={{ from: window.location.pathname }} replace />
    )
}

export default PrivateRoute;