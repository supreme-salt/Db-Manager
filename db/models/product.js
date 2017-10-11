module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.ENUM,
      values: [
        'Jackets',
        'Shirts',
        'Tops/Sweaters',
        'Sweatshirts',
        'Pants',
        'Hats',
        'Bags',
        'Accessories',
        'Shoes',
        'Skate'
      ],
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM,
      values: ['SS', 'FW'],
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Product;
};
