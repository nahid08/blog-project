const Sequelize = require("sequelize");
const sequelize = new Sequelize('test','root','1234',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases: false
})

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;   

db.user = require("./User")(sequelize, Sequelize);
db.blogs = require('./Blogs')(sequelize, Sequelize);


db = require('./relation')(db);


// db.sequelize.sync({alter: true})


module.exports = db; 