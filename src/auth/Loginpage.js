import { useLocation, useNavigate } from "react-router-dom"; 

function Loginpage() {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state;

    return (
        <div>
            <h1>Login page</h1>
        </div>
    )
}

export {Loginpage}