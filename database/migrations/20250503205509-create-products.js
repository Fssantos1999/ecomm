'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
  return queryInterface.createTable('products', { 
   id: { 
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
   },
   product_name: { 
    type: Sequelize.STRING,
    allowNull: false,
   },
   quantity: { 
    type: Sequelize.INTEGER,
   },
   price: { 
    type: Sequelize.DECIMAL,
    allowNull: false
   },
   sku: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
   },
   image_url: { 
    type: Sequelize.STRING,
    allowNull: true  
   },
   status: {
    type: Sequelize.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE', 
   },
   created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
   },
   updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
   }
  });
 },

 async down (queryInterface, Sequelize) {
  return queryInterface.dropTable('products');
 }
};
