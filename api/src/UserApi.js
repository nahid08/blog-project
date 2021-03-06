const UserController = require("./Controller/UserController");
const { createToken, authenticateToken, clearToken} = require("./middlewares/JsonMiddleware");
const { imageProcess} = require("./middlewares/imageProcess");
const UserService = require("./Service/UserService");

module.exports = (app) => {
    app.post("/registration", UserController.registration);

    app.post("/login", UserController.authenticateUser, createToken);

    app.post('/logout', clearToken);

    app.post("/addblog", authenticateToken, UserController.addblog);

    app.put('/editblog', authenticateToken, UserController.editBlog);

    app.delete('/deleteblog/:blogId', authenticateToken, UserController.deleteBlog);

    app.get('/getBlog', authenticateToken, UserController.getBlog);

    app.get('/getBlogList', authenticateToken, UserController.getBlogList);

    app.get('/getAllBlog',  UserController.getAllBlog);

    app.post('/addcomment', authenticateToken, UserController.addComment);

    app.post('/image', imageProcess, authenticateToken, UserController.addImage)

    app.get("/getImage", authenticateToken, UserController.getImage);

}


