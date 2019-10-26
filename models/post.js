const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


module.exports = function(sequelize, DataTypes) {
   var TeacherPost = sequelize.define("TeacherPosts", {
    // The email cannot be null, and must be a proper email before creation
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    students: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  return TeacherPost;
};

