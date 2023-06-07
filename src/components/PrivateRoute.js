import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute ({ isAuth, children }) {
    if (isAuth) {
        return children
    } else {
        return <Navigate to="/" replace />
    }
}

export default PrivateRoute;