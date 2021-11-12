
module.exports = (db) => {
  
    db.user.hasMany(db.blogs, { as: 'blogs'});
    db.blogs.belongsTo(db.user, {
    })

    return db;
} 