module.exports = (db) => {
  db.user.hasMany(db.blogs, { as: "blogs" });
  db.blogs.belongsTo(db.user);

  db.blogs.hasMany(db.comment, { onDelete: "cascade"});
  db.comment.belongsTo(db.blogs, );
  return db;
};
