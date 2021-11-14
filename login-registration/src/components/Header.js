import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import  logout from '../actions/logout';

function PublicComponent() {
  return (
    <React.Fragment>
      <Link to="/login" className="mr-2">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
}

function PrivateComponent() {

  const user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = (e) => {
 
      dispatch(logout()).then((res) => {
        history.push('/');
      })
  }

  return (
    <React.Fragment>
      <Link to="/" className="mr-2">Home</Link>
      <Link to={`/${user.username}`} className="mr-2"  >Profle</Link>
      <Link to={`/${user.username}/addblog`} className="mr-2">Add Blog</Link>
      <Link to="#" onClick={onLogout} >Logout</Link>
    </React.Fragment>
  )
}

function Header(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="float-left">Bolog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {user.isLogin === false ? <PublicComponent/> : <PrivateComponent/>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;
