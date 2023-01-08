import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({positive}) {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to="/" state={{form: location}} />
    }

    return positive;
}

export {RequireAuth}