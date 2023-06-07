import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import { AuthContext } from "./context/AuthContext";


function App() {
    const { isAuth, login, logout } = useContext(AuthContext)
    // console.log(isAuth)

  return (
    <>
    {/*{console.log(isAuth)}*/}
      <NavBar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute isAuth={isAuth.isAuth}><Profile /></PrivateRoute>} />
          <Route exact path="/signin" element={<SignIn />}/>
          <Route exact path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
