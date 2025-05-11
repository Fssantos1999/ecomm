/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
  await queryInterface.createTable('order_details', {
   id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
   },
   order_id: {
    type: Sequelize.INTEGER,
    references: {
     model: 'orders',
     key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
   },
   product_id: {
    type: Sequelize.INTEGER,
    references: {
     model: 'products',
     key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
   },
   quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
   },
   price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
   },
   unit_price: {
    type: Sequelize.DECIMAL(10, 2),
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
