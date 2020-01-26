import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import FriendsList from './components/FriendsList'
import NewFriendForm from './components/NewFriendForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <FriendsList/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/newfriend" component={NewFriendForm}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
