//associations
//one offer to one product
//one offer to one user

module.exports = function(sequelize, DataTypes) {
  let Offer = sequelize.define('Offer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    offerPrice: {
      type: DataTypes.INTEGER
    },
    dateCreated: {
      type: DataTypes.DATE
    }
  });
  return Offer;
};
