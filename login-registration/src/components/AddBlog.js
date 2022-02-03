import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import userService from "../services/RegistrationService";

function AddBlog(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const history = useHistory();

  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else if (e.target.name === "description") setDescription(e.target.value);
  };

  const addBlog = () => {
    userService.addBlog({ title, description }).then((res) => {
      history.push({
        pathname: `/${user.username}/blog/${res.data.id}`,
        state: {
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          image: image
        },
      });
    });
  };

 


  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <h1 className="text-center">Add A New Blog</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
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
              name="description"
              onChange={handleChange}
              placeHolder="description"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Button onClick={addBlog}>Add</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(AddBlog)
