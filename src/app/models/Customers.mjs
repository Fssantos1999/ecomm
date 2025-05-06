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
      unique: {
        msg: 'Este e-mail já está em uso!',
      },
      validate: {
        notEmpty: {
          msg: 'O e-mail é obrigatório.',
        },
        isEmail: {
          msg: 'Insira um e-mail válido.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate:{
      type: DataTypes.DATE
    },
  },
  {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true,
    timestamps: true,
  }
);
//PRECISEI FAZER UM PROTOPYE PQ NAO CONSEGUI REMOVER A SENHA DO JSON LA NO CONTROLLER
Customer.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

export default Customer;
