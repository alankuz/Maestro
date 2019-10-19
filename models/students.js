module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
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
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    sq: {
      type: DataTypes.STRING,
      allowNull: false,
      vaslidate: {
        len: [1, 50]
      }
    }
  });

  Student.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Student.belongsTo(models.Teacher, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Student;
};
