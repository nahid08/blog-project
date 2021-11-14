import http from "../http-common";


export default {
    post: (data) => {
        
        return http.post("/registration", data);
    },

    login: (data) => {
        return http.post("/login", data);
    },

    addBlog: (data) => {
        return http.post("/addblog", data);
    },

    getBlog: (queryParam) => {
        console.log(queryParam);
        return http.get('/getBlog', queryParam);
    },

    getBlogList: (queryParam) => {
        return http.get('/getBlogList', queryParam);
    },

    getAllBlog: () => {
        return http.get('/getAllBlog');
    }
}