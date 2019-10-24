module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define("Teacher", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1, 40]
      }
    }
  });

  Teacher.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Teacher.hasMany(models.Students, {
      onDelete: "cascade"
    });
  };
  Teacher.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Teacher.hasMany(models.Documents, {
      onDelete: "cascade"
    });
  };
  return Teacher;
};
