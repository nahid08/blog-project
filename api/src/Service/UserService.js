const { getBlog } = require("../Controller/UserController");
const { user, blogs } = require("../model");
const { Op } = require("sequelize");
const db = require("../model/index");

module.exports = {
  registration: (req, res) => {
    const { username, fullname, email, password,} = req.body;
    return user
      .create({ username, fullname, email, password,})
      .then((data) => {
        return Promise.resolve();
      })
      .catch((err) => {
        console.log(err.message);
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
        attributes: ['id', 'username', 'email'],
        raw: true,
      })
      .then((data) => {
        console.log(data);
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

  editBlog: (data) => {
    const { blogId, title, description} = data;

    console.log(blogId);
    console.log(title);
    console.log(description);

    return blogs.update({
      title: title,
      description: description
    },
    {
      where: {
        id: blogId
      }
    }).then((data) => {
      console.log(data);
      return data;
    });
  },
  
  getBlog: (data) => {
    return blogs.findOne({
      include: [
        {
          model: user,
          attributes: [],
          where: {
            username: data.username
          }
        }
      ],
      where: {
        id: data.blogId
      }
    })
      .then((data) => {
        return data;
      });
  },

  getBlogList: (data) => {
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

  getAllBlog: (data) => {
    return blogs.findAll({
      include: [
        {
          model: user,
          attributes: ['id', 'username']
        }
      ]
    }).then((val) => {
      return val;
    }).catch(err => console.log(err))
  }
};
