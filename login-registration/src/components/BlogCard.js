import React from "react";
import { Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import './BlogCard.css';


function BlogCard(props) {

  const history = useHistory();

  console.log(props);


  const showBlog = () => {
      history.push(`${props.name}/blog/${props.id}`);
  }

  return (
    <>
      <Col lg={4} className="my-3">
        <Card className="card-style"  onClick={showBlog}>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Body>
            <Card.Text className="text-style">
              {props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default withRouter(BlogCard)
