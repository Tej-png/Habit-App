import { useState } from 'react';
import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Login({ setUserPass, userPass }) {
  const [user, setUser] = useState();

  return (
    <div className="main">
      <div>
        <h1 className="title">WELCOME TO THE HABIT TRACKING APP</h1>
        <div className="login-form">
          <label for="name">Username</label>
          <input
            placeholder="Enter your name"
            id="name"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          ></input>
          <label for="password">Password </label>
          <input placeholder="Enter your password" id="password"></input>
          <Link to={userPass ? '/main' : '/'}>
            <button className="login-btn">SIGN IN</button>
          </Link>

          <p>SIGN UP?</p>
        </div>
      </div>
      <img src={logo} />
    </div>
  );
}

export default Login;
