module.exports = function(sequelize, DataTypes) {
  var Document = sequelize.define("Documents", {
    docName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    docType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    docDate: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    }
  });
  Document.associate = function(models) {
    Document.belongsTo(models.Teacher, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Document;
};
