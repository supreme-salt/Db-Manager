// Associations
//one payment to one user

module.exports = function(sequelize, DataTypes) {
  let Payment = sequelize.define('Payment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })
  return Payment
};