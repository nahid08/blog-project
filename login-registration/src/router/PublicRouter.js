import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PublicRouter(props) {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <>
      <Route
        path={props.path}
        render={() =>
         ( user.isLogin === false ? <props.Component/> : <Redirect to="/" />)
        }
      />
    </>
  );
}
