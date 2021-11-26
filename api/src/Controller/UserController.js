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
        req.body.email = data.email
        next();
      })
      .catch((err) => {
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

  editBlog: (req, res) => {
    return userService.
    editBlog(req.body)
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(404).send(err);
    })
  },

  deleteBlog: (req, res) => {
    const { blogId } = req.params;
    return userService.deleteBlog({blogId}).then((data) => {
      res.status(200).json(data);
    }).catch((err) => {
      return res.status(404).send(err);
    })
  },

  getBlog: (req, res) => {
   
    const { username, blogId } = req.query;

    return userService
      .getBlog({ username, blogId })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err.message);
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

  getAllBlog: (req, res) => {
     return userService.getAllBlog().then((data) => {
       return res.status(200).json(data);
     }).catch((err) => {
       console.log(err.message)
       res.status(404).send(err);
     })
  },

  addComment: (req, res) => {
    return userService.addComment(req.body).then((data) => {
      console.log(req.body);
      return res.status(200).json(data);
    }).catch((err) => {
      res.status(404).send(err);
    })
  }
};
