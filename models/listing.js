// associations
// one listing to one product
// one listing to one user
// one listing to one color

module.exports = function(sequelize, DataTypes) {
  const Listing = sequelize.define('Listing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      // Enum values: ['created', 'ordered', 'shipped']
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
    },
    size: {
      type: DataTypes.STRING
    },
    condition: {
      type: DataTypes.STRING
    },
    flaws: {
      type: DataTypes.STRING
    }
  });
  return Listing;
};
