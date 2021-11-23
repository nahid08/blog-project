import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import userService from "../services/RegistrationService";
import BlogCard from "./BlogCard";
import { io } from "socket.io-client";
import { toast } from "react-toastify";


export default function Home() {
  const [allBlog, setAllBlog] = useState([]);
  const [ms, setMs] = useState("");

  useEffect(() => {
    toast("Welcome to blog");
    userService
      .getAllBlog()
      .then((res) => {
        console.log(res.data);
        setAllBlog(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);




  const renderAllBog = () => {
    return allBlog.map((blog) => {
      return (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          name={blog.user.username}
          id={blog.id}
        />
      );
    });
  };

  return (
    <>
      <Container>
        <Row>{renderAllBog()}</Row>
      </Container>
    </>
  );
}
