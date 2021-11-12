import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./Header";
import http from "../http-common";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BlogList from "./BlogList";
import Blog from "./Blog";
import AddBlog from "./AddBlog";

function Profile(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route
                path={`${props.match.path}/addblog`}
                render={() => {
                  return <AddBlog />;
                }}
                exact
              />
                 <Route
                path={`${props.match.path}/blog/:blogId`}
                render={() => {
                  return <Blog/>
                }}
                exact
              />
             
              <Route path="" render={() => <BlogList />} exact />
           
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
