import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRouter(props) {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Route
        path={props.path}
        render={() => 
           (user.isLogin === true ? <props.Component/> : <Redirect to="/login"/>)
        }
      />
    </>
  );
}
