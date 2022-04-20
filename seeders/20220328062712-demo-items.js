'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('items', [
    {
      name: 'Apple',
      is_activated: true,
      unit:4, //KG
      sku: 'R1001',
      description:"an apple keeps the doctor away",
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'Banana',
      is_activated: true,
      unit:1, //PIECES
      sku: 'R1002',
      description:"a banana a day keeps depression away",
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'Orange',
      is_activated: true,
      unit:20, //Dozen
      sku: 'R1003',
      description:"an orange a day health benefits",      
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('items', null, {});
     await queryInterface.bulkDelete('stocks', null, {});
     await queryInterface.bulkDelete('stock_balances', null, {});
  }
};
