import http from "../http-common";


export default {
    post: (data) => {
        
        return http.post("/registration", data);
    },

    login: (data) => {
        return http.post("/login", data);
    },

    logout: (data) => {
        return http.post('/logout', data);
    },

    addBlog: (data) => {
        return http.post("/addblog", data);
    },

    editBlog: (data) => {
        return http.put('/editblog', data)
    },

    deleteBlog: (blogId) => {
        return http.delete(`/deleteBlog/${blogId}`);
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
    },

    addComment: (data) => {
        return http.post('/addcomment', data);
    }
}