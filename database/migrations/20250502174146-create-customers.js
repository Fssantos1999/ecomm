'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('customers', {
   id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
   },
   name: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
   },
   password: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   phone: {
    type: Sequelize.STRING,
    allowNull: true,
   },
   created_at: {
    type: Sequelize.DATE,
    allowNull: false,
   },
   updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
   },
  });
 },

 down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('customers');
 },
};
