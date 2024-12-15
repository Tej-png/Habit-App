import { useState } from 'react';
import logo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/Main';

function App() {
  const [count, setCount] = useState(0);
  const [userPass, setUserPass] = useState();

  return (
    <Router>
      <Routes>
        {/* Route for the Login Page */}
        <Route
          path="/"
          element={<Login userPass={userPass} setUserPass={setUserPass} />}
        />

        {/* Route for the Main Page */}
        <Route path="/main" element={<Main userPass={userPass} />} />
      </Routes>
    </Router>
  );
}

export default App;
