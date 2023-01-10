import { NavLink } from 'react-router-dom';
import { Mainpage } from '../mainpage/Mainpage';

import './header.css';
import './footer.css';

function Breadbord(setIsLogin, isLogin) {
    const handleLogout = () => {
        setIsLogin(false);
    }

    const handleLogin = () => {
        setIsLogin(true);
    }

    return (
        <>
        <header>            
            <nav>
                <NavLink to="/" className={'nav'}>Home</NavLink>
                <NavLink to="/posts" className={'nav'}>Posts</NavLink>
                <NavLink to="/video" className={'nav'}>Video</NavLink>
                <NavLink to="/photos" className={'nav'}>Photos</NavLink>
                <NavLink to="/about" className={'nav'}>About</NavLink>
                <NavLink to="/login" className={'nav'} onClick={isLogin ? handleLogout : handleLogin}>{isLogin?'Logout':'Login'}</NavLink>
            </nav>

        </header>

        <Mainpage />
        
        <footer>© Reynes | Telegram: @reynesss</footer>
        </>
    )
}

export {Breadbord}