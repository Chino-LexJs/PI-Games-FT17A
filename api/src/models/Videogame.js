const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      background_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.REAL,
        validate: {
          max: 5,
          min: 0,
        },
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
      price: {
        type:  DataTypes.REAL
      }
    },
    {
      timestamps: true,
    }
  );
};
