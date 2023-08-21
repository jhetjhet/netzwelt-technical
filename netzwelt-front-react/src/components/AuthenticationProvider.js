import axios from "axios";
import { createContext, useContext, useState } from "react";


const authenticationContext = createContext();

export const useAuthenticationContext = () => {
    return useContext(authenticationContext);
}

const AuthenticationProvider = ({ children }) => {
    /**
     * for this authentication system logout is not implemented
     */

    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password, cb) => { // cb ~ callback
        try {
            let { data } = await axios.post('http://localhost:8080/signIn/', {
                username,
                password,
            });

            setUser(data);
            setIsAuthenticated(true);
            cb && cb(data, null); // if successful return user data with null error
        } catch (error) {
            cb && cb(null, error); // else return null user data and the error
        }
    }

    return (
        <authenticationContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
            }}
        >
            { children }
        </authenticationContext.Provider>
    );
}

export default AuthenticationProvider;