import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <FriendsList/>
        <Route path="/login" component={LoginForm}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
