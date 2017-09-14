//Associations
// one order has one payment
//one order has one listing

module.exports = function(sequelize, DataTypes) {
  let Order = sequelize('Order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipppingNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  })
  return Order
};