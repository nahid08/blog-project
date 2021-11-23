import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Switch, Route, withRouter } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Header from "./Header";
import http from "../http-common";
import { useSelector } from "react-redux";
import BlogList from "./BlogList";
import Blog from "./Blog";
import AddBlog from "./AddBlog";

function Profile(props) {

  useEffect(() => {
    toast("All is ok.")
  })

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <BlogList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
