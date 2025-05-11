
class OrderDetail extends Model {}
import { Model, DataTypes } from 'sequelize';
import config from '../../../config/config.cjs';
const { sequelize } = config;

OrderDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderDetail',
    tableName: 'order_details',
    underscored: true,
    timestamps: true,
  }
);