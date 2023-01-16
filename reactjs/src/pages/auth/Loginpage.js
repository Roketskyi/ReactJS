import { useEffect, useState } from 'react';
import axios from 'axios';

import './loginpage.css';

function Loginpage({isLogin, setIsLogin}) { 
    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem('isLogin', isLogin ? true : false);
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
    }, [loginError, passwordError]);

    const loginHandler = (e) => {
        const re = /^[a-zA-Z0-9_.]+$/
        if (!re.test(e.target.value)) setLoginError('Incorrect login');
        else if (e.target.value.length < 4 || e.target.value.length > 12) setLoginError('Login must be more than 4 and less than 12 characters');
        else setLoginError('');
        
        setLogin(e.target.value);
    }

    const passwordHandler = (e) => {
        if (!e.target.value) setPasswordError('Password cannot be empty');
        else if (e.target.value.length < 4 || e.target.value.length > 10) setPasswordError('Password must be more than 4 and less than 10 characters');
        else setPasswordError('');
        
        setPassword(e.target.value);
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
                
    // check login/password in base
    const [validLogin, setValidLogin] = useState(false);
    
    const authHandler = () => {
        axios.get('/api/find/' + login)
            .then(response => {
                const base = response.data[0];
                setValidLogin(base.login);
                
                if (validLogin) setIsLogin(password === base.password ? true : false)
            }
        )
    }
                
                
    return (
        <form className="loginForm" onSubmit={handleLogin}>
            <h1 className="adminPanel">Admin Panel</h1>

            <div>
                {(loginDirty && loginError) && <div className='inputsError'>{loginError}</div>}
                <input
                    onChange={loginHandler}
                    onBlur={blurHandle}
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
                    onChange={passwordHandler}
                    onBlur={blurHandle}
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
                <button className='btnLogin' disabled={!formValid} type="submit" onClick={authHandler}>Login</button>
            </div>
        </form>
    )
}

export {Loginpage}