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
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'Banana',
      is_activated: true,
      unit:1, //PIECES
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'Orange',
      is_activated: true,
      unit:20, //Dozen
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
