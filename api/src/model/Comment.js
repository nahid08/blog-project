const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        comment: {
            type: Sequelize.TEXT
        },
        username: {
            type: Sequelize.STRING
        },
        
    })

    return Comment;
}