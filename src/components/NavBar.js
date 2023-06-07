import React, { useContext } from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const { isAuth, login, logout, user } = useContext(AuthContext);
  // console.log(isAuth);

  return (
      <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

        {isAuth ?
            <div className="wrapper-username-logout">
            <span className="user">
                <h5>{user}</h5>
            </span>
            <button
                type="button"
                onClick={logout}
            >
              Log uit
            </button>
            </div>
            :
            <div>
              <button
                  type="button"
                  onClick={() => navigate('/signin')}
              >
                Log in
              </button>
              <button
                  type="button"
                  onClick={() => navigate('/signup')}
              >
                Registreren
              </button>
            </div>
        }
      </nav>
    )
  }

export default NavBar;