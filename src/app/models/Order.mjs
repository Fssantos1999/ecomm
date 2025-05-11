import config from '../../../config/config.cjs';
import { Model, DataTypes } from 'sequelize';
const { sequelize } = config;
class Order extends Model {}

Order.init(
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
        total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        },
        status: {
        type: DataTypes.ENUM('pending', 'completed', 'canceled', 'refunded','paid', 'shipped', 'delivered', 'returned'),
        defaultValue: 'pending',
        allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        underscored: true,
        timestamps: true,
    }
    );
