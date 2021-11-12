const UserController = require("./Controller/UserController");
const { createToken, authenticateToken} = require("./middlewares/JsonMiddleware");

module.exports = (app) => {
    app.post("/registration", UserController.registration);

    app.post("/login", UserController.authenticateUser, createToken);

    app.post("/addblog", authenticateToken, UserController.addblog);

    app.get('/getBlog', authenticateToken, UserController.getBlog);

    app.get('/getBlogList', authenticateToken, UserController.getBlogList);
}