module.exports = function(sequelize, DataTypes) {
  let Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
      // ENUM values: ['Jackets', 'Shirts', 'Tops/Sweaters', 'Sweatshirts', 'Pants', 'Hats', 'Bags', 'Accessories', 'Shoes', 'Skate'],
      allowNull: false
    },
    year:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.STRING
      // values: ['SS', 'FW']
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Product;
};