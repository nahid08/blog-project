import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import RegistrationService from "../services/RegistrationService";
import BlogCard from "./BlogCard";

 function BlogList(props) {
  const [blogArray, setBlogArray] = useState([]);

  const user = useSelector((state) => state.user);

  const params = {
    userId: user.id,
  };


  useEffect(() => {
    RegistrationService.getBlogList({ params })
      .then((res) => {
        const arr = [];
        for (let i = 0; i < res.data.length; i++) {
          console.log(i);
          arr.push(res.data[i]);
        }
        return arr;
      })
      .then((val) => {
        setBlogArray(val);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const renderCard = () => {
    console.log(blogArray);
    return blogArray.map((blog) => {
      return (
        <BlogCard
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      );
    });
  };

  return (
    <>
      <Container>
        <Row>{renderCard()}</Row>
      </Container>
    </>
  );
}

export default withRouter(BlogList)