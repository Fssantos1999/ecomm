import { Model, DataTypes } from 'sequelize';

class Product extends Model {}

Product.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_name: { 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    quantity: { 
      type: DataTypes.INTEGER,
    },
    price: { 
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sku: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      unique: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      defaultValue: 'ACTIVE',
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'Product',
    tableName: 'products',

  }
);

export default Product;
