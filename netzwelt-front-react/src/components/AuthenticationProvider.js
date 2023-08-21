import axios from "axios";
import { createContext, useContext, useState } from "react";


const authenticationContext = createContext();

export const useAuthenticationContext = () => {
    return useContext(authenticationContext);
}

const AuthenticationProvider = ({ children }) => {
    /**
     * for this authentication system logout is not implemented
     * to save session of signing in we save the isAuthenticated boolean to localStorage
     * 
     * The user will forever be logged in until it closes this web tab.
     * 
     * User object is not also used for this setup
     */
    const IS_AUTHENTICATED_KEY = 'is_authenticated';

    const [user, setUser] = useState();

    const login = async (username, password, cb) => { // cb ~ callback
        try {
            let { data } = await axios.post('http://localhost:8080/signIn/', {
                username,
                password,
            });

            setUser(data);
            sessionStorage.setItem(IS_AUTHENTICATED_KEY, true);
            cb && cb(data, null); // if successful return user data with null error
        } catch (error) {
            cb && cb(null, error); // else return null user data and the error
        }
    }

    function isAuthenticated() {
        return Boolean(sessionStorage.getItem(IS_AUTHENTICATED_KEY));
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