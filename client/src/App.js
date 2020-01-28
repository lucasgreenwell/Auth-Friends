import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route
            path="*"
            component={() => {
              return <p>404 Page not available</p>;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
