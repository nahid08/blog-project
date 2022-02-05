import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Switch, Route, withRouter } from "react-router-dom";
import { Button, Col, Container, Form, Row, Image, Figure } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
import http from "../http-common";
import { useSelector } from "react-redux";
import BlogList from "./BlogList";
import Blog from "./Blog";
import AddBlog from "./AddBlog";
import userService from '../services/RegistrationService';

let cn=0;
function Profile() {
  const [image, setImage] = useState(null);
  const [proPic, setProPic] = useState("");

  useEffect(() => {
    userService.getImage().then(res => {
      setProPic(res.data.url);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  const imageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const add = () => {
    const formData = new FormData();
    formData.append("file", image);
    userService
      .addImage(formData)
      .then(res => {
        setProPic(res.data.url);
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <Col className="d-flex flex-row justify-content-center">
            <Figure.Image src={proPic} height={200} width={200} roundedCircle fluid  />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <input type="file" onChange={imageUpload} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center mt-4">
          <Button onClick={add}>Add Image</Button>
          </Col>
        </Row>
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
