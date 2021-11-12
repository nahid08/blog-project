const UserService = require("../Service/UserService");
const userService = require("../Service/UserService");

module.exports = {
  registration: (req, res) => {
    return userService
      .registration(req, res)
      .then((val) => {
        return res.status(201).json();
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  },

  authenticateUser: (req, res, next) => {
    return userService
      .login(req.body)
      .then((data) => {
        req.body.id = data.id;
        next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(403).json(err);
      });
  },

  addblog: (req, res) => {
    return userService
      .addBlog(req.body)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(404).send(err);
      });
  },

  getBlog: (req, res) => {
    const { userId, blogId } = req.query;

    return userService
      .getBlog({ userId, blogId })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  },

  getBlogList: (req, res) => {
    const { userId } = req.query;

    return userService
      .getBlogList({ userId })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(404).send(err);
      });
  },
};
