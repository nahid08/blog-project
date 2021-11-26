
module.exports = (db) => {
  
    db.user.hasMany(db.blogs, { as: 'blogs'});
    db.blogs.belongsTo(db.user)

    db.blogs.hasMany(db.comment,);
    db.comment.belongsTo(db.blogs)

    return db;
} 