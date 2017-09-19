// Associations
// one color to one listing

module.exports = function(sequelize, DataTypes) {
  const Color = sequelize.define('Color', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Color;
};
