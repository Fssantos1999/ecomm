import { Model, DataTypes } from 'sequelize';
import config from '../../../config/config.cjs';
const { sequelize } = config;

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate:{
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
    timestamps: true,
  }
);

export default Customer;
