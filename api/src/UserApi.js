const UserController = require("./Controller/UserController");
const { createToken, authenticateToken, clearToken} = require("./middlewares/JsonMiddleware");

module.exports = (app) => {
    app.post("/registration", UserController.registration);

    app.post("/login", UserController.authenticateUser, createToken);

    app.post('/logout', clearToken);

    app.post("/addblog", authenticateToken, UserController.addblog);

    app.get('/getBlog', authenticateToken, UserController.getBlog);

    app.get('/getBlogList', authenticateToken, UserController.getBlogList);

    app.get('/getAllBlog', authenticateToken, UserController.getAllBlog);
}