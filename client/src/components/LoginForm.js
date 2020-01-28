import React, { useState } from "react";
import axios from "axios";

import {Link} from 'react-router-dom'

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
   
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onChange={handleChange}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} />
        <br />
        <label htmlFor="password">Password </label>
        <input type="text" id="password" value={password} />
        <br />
        <Link to="/dashboard">
            <button onClick={handleSubmit}>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;

// const login = () => {
//   axios.post('endpoint/here', userCredentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.token);
//       props.history.push('/dashboard');
//     }
// }
