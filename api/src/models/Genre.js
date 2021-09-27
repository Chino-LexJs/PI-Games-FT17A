const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Genre", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};
