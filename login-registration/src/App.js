import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom" 
import { withRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile"
import AddBlog from "./components/AddBlog";
import Blog from './components/Blog';


function App()
{
   
    return (
        <>
        <BrowserRouter>
         <Switch>
             <Route component={Registration} path="/" exact/>
             <Route component={Login} path="/login" exact/>
             <Route component={Profile} path="/:username"/>
             
         </Switch>
        </BrowserRouter>
        </>
    )
}

export default App;