import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AddBlog from "./components/AddBlog";
import Home from "./components/Home";
import PrivateRoute from "./router/PrivateRouter";
import PublicRoute from "./router/PublicRouter";
import Header from "./components/Header";
import Blog from "./components/Blog";
import EditBlog from "./components/EditBlog";
import Chat from  './components/Chat';
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />

          <PublicRoute path="/login" Component={Login} />
          <PublicRoute path="/registration" Component={Registration} />
          <Route path="/:username/chat" component={Chat} />
          <PrivateRoute path="/:username/blog/:blogId" Component={Blog} />
          <PrivateRoute path="/:username/addblog" Component={AddBlog} />
          <PrivateRoute path="/:username/editblog" Component={EditBlog} />
          <PrivateRoute path="/:username" Component={Profile} />
        </Switch>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
