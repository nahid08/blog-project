import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router';
import userService from '../services/RegistrationService';
import { useSelector } from "react-redux";

function EditBlog(props) {

  

  const [title, setTitle] = useState(props.location.state.title);
  const [description, setDescription] = useState(props.location.state.description);

  const history = useHistory();
  const user = useSelector(state => state.user);

  const handleChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else if (e.target.name === "description") setDescription(e.target.value);
  };

  const params = {
      title, description, blogId: props.location.state.blogId
  }

  const editBlog = (e) => {
      userService.editBlog(params)
      .then((res) => {
          console.log(res);
          history.push({
              pathname: `/${user.username}/blog/${props.location.state.blogId}`
          })
      }).catch((err) => {
          console.log(err);
      })
  }

  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <h1 className="text-center">Edit A Blog</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeHolder="title"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              value={description}
              name="description"
              onChange={handleChange}
              placeHolder="description"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Button onClick={editBlog}>Save</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(EditBlog);