import { useEffect, useState } from 'react';

import './loginpage.css';

function Loginpage({setIsLogin}) { 
    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem('isLogin', true);
        setIsLogin(true);
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Login cannot be empty');
    const [passwordError, setPasswordError] = useState('Password cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (loginError || passwordError) setFormValid(false);
        else setFormValid(true);
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value);

        const re = /^[a-zA-Z0-9_.]+$/
        if (e.target.value.length < 4 || e.target.value.length > 8) {
            setLoginError('Login must be more than 4 and less than 8 characters')
            if (!re.test(e.target.value)) setLoginError('Incorrect login');
        } else setLoginError('');
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 4 || e.target.value.length > 10) {
            setPasswordError('Password must be more than 4 and less than 10 characters');
            if (!e.target.value) setPasswordError('Password cannot be empty');
        } else setPasswordError('');
    }

    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true);
            break;

            case 'password':
                setPasswordDirty(true);
            break;

            default:
        }
    }

    return (
        <form className="loginForm" onSubmit={handleLogin}>
            <h1 className="adminPanel">Admin Panel</h1>

            <div>
                {(loginDirty && loginError) && <div className='inputsError'>{loginError}</div>}
                <input
                    onChange={e => loginHandler(e)}
                    onBlur={e => blurHandle(e)}
                    name='login'
                    value={login}
                    className="loginFormInput"
                    type="text"
                    placeholder="Login"
                    autoComplete="username"
                    required                
                />
            </div>

            {(passwordDirty && passwordError) && <div className='inputsError'>{passwordError}</div>}
            <div>
                <input
                    onChange={e => passwordHandler(e)}
                    onBlur={e => blurHandle(e)}
                    name='password'
                    value={password}
                    className="loginFormInput"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required                
                />
            </div>

            <div>
                <button className='btnLogin' disabled={!formValid} type="submit">Login</button>
            </div>
        </form>
    )
}

export {Loginpage}