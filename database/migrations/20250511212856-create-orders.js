/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
  return queryInterface.createTable('orders', {
   id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
   },
   customer_id: {
    type: Sequelize.INTEGER,
    references: {
     model: 'customers',
     key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
   },
   status: {
    type: Sequelize.ENUM('pending', 'completed', 'canceled', 'refunded','paid', 'shipped', 'delivered', 'returned'),
    defaultValue: 'pending',
    allowNull: false
   },
   total_price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
   },
   created_at: {
    type: Sequelize.DATE,
    allowNull: false
   },
   updated_at: {
    type: Sequelize.DATE,
    allowNull: false
   }
  });


 },

 async down (queryInterface, Sequelize) {
  /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
 }
};
