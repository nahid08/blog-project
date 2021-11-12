module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define(
    "blogs",
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT
      },
    },
    {
      alter: true,
    }
  );
  return Blog;
};
