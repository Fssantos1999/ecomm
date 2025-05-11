import Cart from './Cart.mjs';
import Customer from './Customers.mjs';
import Order from './order.mjs';
import OrderDetail from './orderDetails.mjs';

Cart.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasOne(Cart, { foreignKey: 'customer_id' });

Order.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Order, { foreignKey: 'customer_id' });

OrderDetail.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(OrderDetail, { foreignKey: 'order_id' });

export { Cart, Customer, Order, OrderDetail }; 
