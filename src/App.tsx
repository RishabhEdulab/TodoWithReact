import React, { useState } from "react";
import logo from "./logo.svg";
import Student from "./component/Page/Student";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './index.css';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState<boolean>(false)
  return (
    <div>
      <Switch>
        <Route exact  path="/" component={Register}></Route>
        <Route path="/Login" component={()=><Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}></Route>
        <Route path="/Student" component={()=><Student isAuthenticated={isAuthenticated} />}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
