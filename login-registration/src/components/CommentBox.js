import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TextAreaAutoSize from "react-textarea-autosize";
import { useParams, withRouter } from "react-router";
import { useSelector } from "react-redux";
import registrationService from "../services/RegistrationService";

function Comment(props) {
  const [commenttext, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);

  const { blogId } = useParams();
  const { username } = useSelector((state) => state.user);

  const renderComments = () => {
      console.log(commentList);
    return commentList.map((comment, index) => {
      return (
        <>
          <Col className="border" sm={12}>
            <p>{comment.comment}</p>
          </Col>
        </>
      );
    });
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };



  const addComment = () => {
    registrationService
      .addComment({ username, blogId, commenttext })
      .then((res) => {
         console.log(res.data);
        setCommentText("");  
        const list = commentList;
        list.push(res.data);
        setCommentList([...list]);
      });
  };

  return (
    <>
      <Container>
        <Row>{renderComments()}</Row>
        <Row>
          <Col className="p-0">
            <TextAreaAutoSize
              minRows={2}
              maxRows={100}
              className="w-100 mt-3"
              value={commenttext}
              onChange={handleChange}
             
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={addComment}>Add</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Comment);
