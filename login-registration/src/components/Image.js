import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import userService from "../services/RegistrationService";

export default function Image() {
  const [image, setImage] = useState();

  const imageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const add = (e) => {
   console.log(image)
    const formData = new FormData();
    formData.append("file", image);
    console.log(formData);
    userService
      .addImage(formData)
      .then(console.log("yes"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Control type="file" onChange={imageUpload} />
        </Col>
      </Row>
      <Row>
        <Button onClick={add}>Add</Button>
      </Row>
    </>
  );
}
