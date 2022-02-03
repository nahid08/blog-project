import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
  });

  const http1 = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
  });

export {
  http, http1
}