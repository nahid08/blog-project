import React from "react";
import { Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import './BlogCard.css';


function BlogCard(props) {

  const user = useSelector(state => state.user);
  const history = useHistory();


  const showBlog = () => {
      history.push(`${props.match.url}/blog/${props.id}`);
  }

  return (
    <>
      <Col lg={4} className="my-3">
        <Card className="card-style"  onClick={showBlog}>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Body>
            <Card.Text className="">
              {props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default withRouter(BlogCard)
