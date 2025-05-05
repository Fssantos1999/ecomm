import Cart from './Cart.mjs';
import Customer from './Customers.mjs';


Cart.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasOne(Cart, { foreignKey: 'customer_id' });

export { Cart, Customer };
