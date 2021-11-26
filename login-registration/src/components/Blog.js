import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router";
import userService from "../services/RegistrationService";
import CommentBox from "./CommentBox";

function Blog(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [commentList, setCommentList] = useState([]);

  const { blogId, username } = useParams();
  const history = useHistory();

  const user = useSelector((state) => state.user);

  const params = {
    username,
    blogId,
  };

  useEffect(() => {
    userService
      .getBlog({ params })
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCommentList(res.data.comment);
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

  const deleteBlog = () => {
    userService
      .deleteBlog(blogId)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className=" mt-4">
        <Row>
          <Col lg={10}>
            <h1 className="text-center">{title}</h1>
          </Col>
          {user.username === username && (
            <>
              <Col>
                <Button onClick={editBlog}>Edit</Button>
              </Col>
              <Col>
                <Button onClick={deleteBlog}>Delete</Button>
              </Col>
            </>
          )}
        </Row>
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
        <CommentBox commentList={commentList}/>
      </Container>
    </>
  );
}

export default withRouter(Blog);
