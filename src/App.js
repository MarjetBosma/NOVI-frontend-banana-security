import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from 'react-router-dom'

function App() {
    const { isAuth, login, logout } = useContext(AuthContext)
    console.log(isAuth)
    const navigate = useNavigate()

  return (
    <>
        {console.log(isAuth)}
      <NavBar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={isAuth ? <Profile /> : navigate("/signin")}/>
          <Route exact path="/signin" element={<SignIn />}/>
          <Route exact path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
