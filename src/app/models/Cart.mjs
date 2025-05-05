import { Model, DataTypes } from 'sequelize';
import config from '../../../config/config.cjs';
const { sequelize } = config;

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('OPEN', 'CHECKED_OUT', 'CANCELLED'),
      defaultValue: 'OPEN',
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    },
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    underscored: true,
    timestamps: true,
  }
);

export default Cart;
