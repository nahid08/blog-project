import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams, withRouter } from "react-router";
import userService from "../services/RegistrationService";
import CommentBox from "./CommentBox";
import { socket } from "../helper/Socket";

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
    console.log("first");
    userService
      .getBlog({ params })
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCommentList([...res.data.comments]);
      })
      .catch((err) => {});

      
  }, []);

  useEffect(() => {
    socket.on("comment", (res) => {
      const { data } = res;
      if (data.blogId === blogId) {
        console.log("yerss");
        console.log(data);
        const list = commentList;
        console.log(commentList);
        list.push(data);
        setCommentList([...list]);
      }
    });
  })

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

  const addComment = (commenttext) => {
    console.log(commenttext);
    userService
      .addComment({ username: user.username, blogId, commenttext })
      .then((res) => {
       
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
        <CommentBox commentList={commentList} addComment={addComment} />
      </Container>
    </>
  );
}

export default withRouter(Blog);
