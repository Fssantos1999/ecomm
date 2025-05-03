import { Model, DataTypes } from 'sequelize';
import Customer from './Customer';

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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.fn('NOW') 
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.fn('NOW') 
    }
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    underscored: true,
    timestamps: true, 
  }
);


Cart.belongsTo(Customer, {
  foreignKey: 'customer_id',  
});

module.exports(Cart)
