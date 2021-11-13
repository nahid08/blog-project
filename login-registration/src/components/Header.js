import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, BrowserRouter } from "react-router-dom";
import { useHistory, withRouter } from "react-router";

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
              <Link to={`${props.match.url}/home`} className="mr-2">Home</Link>
              <Link to={`${props.match.url}`} className="mr-2">Profile </Link>
              <Link to={`${props.match.url}/addblog`}>Add Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(Header);
