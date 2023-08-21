import { useEffect, useState } from "react";
import "./loginPage.css";
import { useAuthenticationContext } from "../../components/AuthenticationProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const DEFAULT_AUTH_DATA = {
        username: "",
        password: "",
    }

    const [authData, setAuthData] = useState({ ...DEFAULT_AUTH_DATA });
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const { login, isAuthenticated } = useAuthenticationContext();

    const location = useLocation();

    const navigate = useNavigate();

    let from = "/home/index/";
    if (location.state && location.state.from) { // check if there is a state of 'from'
        from = location.state.from;
    }

    useEffect(() => {
        if (isAuthenticated()) {
            navigate(from, { replace: true });
        }
    }, [from, isAuthenticated, navigate]);

    const __on_submit__ = (e) => {
        e.preventDefault();
        login(authData.username, authData.password, (data, err) => {
            if (!err) {
                // redirect to homepage or to previous link
                navigate(from, { replace: true });
                setShowErrorMsg(false);
            } else {
                setShowErrorMsg(true);
            }
        });
    }

    const __on_change__ = (e) => {
        const { name, value } = e.target;

        let newAuthData = { ...authData };
        newAuthData[name] = value;
        setAuthData(newAuthData);
    }

    return (
        <div id="login-page">
            <form onSubmit={__on_submit__}>
                <label htmlFor="username-input">Username</label>
                <input
                    id="username-input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={authData.username}
                    onChange={__on_change__}
                />
                <label htmlFor="password-input">Password</label>
                <input
                    id="password-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={authData.password}
                    onChange={__on_change__}
                />
                <button>login</button>
                <p className={`error-message ${showErrorMsg ? '' : 'error-message-hidden'}`}>Invalid username or password</p>
            </form>
        </div>
    );
}

export default LoginPage;