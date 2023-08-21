import { useState } from "react";
import "./loginPage.css";

const LoginPage = () => {
    const DEFAULT_AUTH_DATA = {
        username: "",
        password: "",
    }

    const [authData, setAuthData] = useState({...DEFAULT_AUTH_DATA});

    const __on_submit__ = (e) => {
        e.preventDefault();
        console.log(authData);
    }

    const __on_change__ = (e) => {
        const { name, value } = e.target;
        
        let newAuthData = {...authData};
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
                    onChange={__on_change__}
                />
                <label htmlFor="password-input">Password</label>
                <input 
                    id="password-input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={__on_change__}
                />
                <button>login</button>
            </form>
        </div>
    );
}

export default LoginPage;