import "./loginPage.css";

const LoginPage = () => {

    return (
        <div id="login-page">
            <form>
                <label htmlFor="username-input">Username</label>
                <input
                    id="username-input" 
                    type="text" 
                    placeholder="Username"
                />
                <label htmlFor="password-input">Password</label>
                <input 
                    id="password-input"
                    type="password" 
                    placeholder="Password"
                />
                <button>login</button>
            </form>
        </div>
    );
}

export default LoginPage;