import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TextAreaAutoSize from "react-textarea-autosize";
import { useParams, withRouter } from "react-router";
import { useSelector } from "react-redux";
import registrationService from "../services/RegistrationService";

function Comment(props) {
  const [commenttext, setCommentText] = useState("");

  console.log(props.commentList);

  const { blogId } = useParams();
  const { username } = useSelector((state) => state.user);

  const renderComments = () => {
    return props.commentList.map((comment, index) => {
      return (
        <>
          <Col className="border" sm={12} className="h-100">
            <p>
              <span className="font-weight-bold">{comment.username}</span> -{" "}
              {comment.comment}
            </p>
          </Col>
        </>
      );
    });
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const addComment = () => {
    props.addComment(commenttext);
  };

  return (
    <>
      <Container>
        <Row>
          <Col >
          <h1 className="text-center">Comments</h1>
          </Col>
        </Row>
        <Row>{renderComments()}</Row>
        <Row>
          <Col className="p-0">
            <TextAreaAutoSize
              minRows={2}
              maxRows={100}
              className="w-100 mt-3"
              value={commenttext}
              onChange={handleChange}
              placeholder="Add a comment"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled={commenttext ? false : true} onClick={addComment}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Comment);
