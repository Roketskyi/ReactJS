import './loginpage.css';

function Loginpage({setIsLogin}) { 
    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem('isLogin', true);
        setIsLogin(true);
    }

    return (
        <form className="loginForm" onSubmit={handleLogin}>
            <h1 className="adminPanel">Admin Panel</h1>
            <div>
                <input
                    className="loginFormInput"
                    type="text"
                    placeholder="Login"
                    autoComplete="username"
                    required                
                />
            </div>

            <div>
                <input
                    className="loginFormInput"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required                
                />
            </div>

            <div>
                <button className='btnLogin'>Login</button>
            </div>
        </form>
    )
}

export {Loginpage}