import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams, withRouter } from "react-router";
import  userService from '../services/RegistrationService'; 

function Blog(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { blogId } = useParams();
  const user = useSelector(state => state.user);
  const id = user.id;

  const params = {
    userId: id, blogId
  }
  

  useEffect(() => {
    userService.getBlog({params}).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
    }).catch((err) => {
    })
  }, [title])



  return (
    <>
      <Container className=" mt-4">
        <Row>
          <Col >
            <h1 className="text-center">{title}</h1>
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