function Loginpage({setIsLogin}) {
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLogin(true);
    }

    return (
        <form className="loginForm" onSubmit={handleLogin}>
            <h1>Admin Panel</h1>
            <div>
                <input
                    className="loginFormInput"
                    type="text"
                    placeholder="Login"
                    required                
                />
            </div>

            <div>
                <input
                    className="loginFormInput"
                    type="password"
                    placeholder="Password"
                    required                
                />
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export {Loginpage}