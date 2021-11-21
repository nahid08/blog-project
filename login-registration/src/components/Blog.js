import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router";
import userService from "../services/RegistrationService";

function Blog(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { blogId, username } = useParams();
  const history = useHistory();

  const params = {
    username,
    blogId,
  };

  useEffect(() => {
    userService
      .getBlog({ params })
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => {});
  }, [title]);

  const editBlog = () => {
    history.push({
      pathname: `/${username}/editblog`,
      state: {
        blogId,
        title,
        description,
      },
    });
  };

  return (
    <>
      <Container className=" mt-4">
        <Row>
          <Col lg={10}>
            <h1 className="text-center">{title}</h1>
          </Col>
          <Col>
            <Button onClick={editBlog}>Edit</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Blog);
