const { getBlog } = require("../Controller/UserController");
const { user, blogs } = require("../model");
const db = require("../model/index");

module.exports = {
  registration: (req, res) => {
    const { username, fullname, email, password, confirmpassword } = req.body;
    return user
      .create({ username, fullname, email, password, confirmpassword })
      .then((data) => {
        return Promise.resolve();
      })
      .catch((err) => {
        return Promise.reject();
      });
  },

  login: (data) => {
    const { username, password } = data;
    return db.user
      .findOne({
        where: {
          username,
          password,
        },
        raw: true,
      })
      .then((data) => {
        if (data === null) return Promise.reject("user not found.");
        return data;
      });
  },

  addBlog: (data) => {
    const { id, title, description } = data;

    return blogs.create({ userId: id, title, description }).then((data) => {
      return data;
    });
  },

  getBlog: (data) => {
    return blogs
      .findOne({
        where: {
          userId: data.userId,
          id: data.blogId,
        },
      })
      .then((data) => {
        return data;
      });
  },

  getBlogList: (data) => {
      console.log(data, 'no');
    return blogs
      .findAll({
        where: {
          userId: data.userId,
        },
        raw: true,
      })
      .then((data) => {
        return data;
      });
  },
};
