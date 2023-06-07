import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: '',
    });
    console.log(isAuth)
    const navigate = useNavigate()

    function login(email) {
        setIsAuth({
            isAuth: true,
            user: email,

        });
        console.log("ingelogd");
        navigate('/profile');
    }

    function logout() {
        setIsAuth({
            isAuth: false,
            user: ''
        })
        console.log("uitgelogd")
        navigate('/');
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={ data }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider