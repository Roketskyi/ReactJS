import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
        <header>
            <NavLink to="/" className={'nav'}>Home</NavLink>
            <NavLink to="/posts" className={'nav'}>Posts</NavLink>
            <NavLink to="/video" className={'nav'}>Video</NavLink>
            <NavLink to="/photos" className={'nav'}>Photos</NavLink>
            <NavLink to="/about" className={'nav'}>About</NavLink>
        </header>
        </>
    )
}

export {Header}