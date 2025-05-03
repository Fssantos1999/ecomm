import { DataTypes, Model } from 'sequelize';
import config from '../../../config/config.cjs';
const { sequelize } = config;



function gerarSKU() {
  return 'SKU' + Math.random().toString(36).substr(2, 5).toUpperCase();
}

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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,  // Usando STRING em vez de CHAR
      allowNull: true,
      unique: true
    },
    image_url: {  // Alterando para snake_case
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
    modelName: 'Product',
    tableName: 'products',
    hooks: {
      beforeCreate: (product, options) => {
        if (!product.sku) {
          product.sku = gerarSKU();
        }
      }
    }
  },
);

export default Product;
