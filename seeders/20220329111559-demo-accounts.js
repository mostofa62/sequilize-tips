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

    await queryInterface.bulkInsert('accounts', [
    {
      name: 'CASH',
      is_activated: true,      
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'ACCOUNT',
      is_activated: true,      
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'CARD',
      is_activated: true,      
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
     await queryInterface.bulkDelete('accounts', null, {});
     await queryInterface.bulkDelete('account_transactions', null, {});
     await queryInterface.bulkDelete('account_balances', null, {});
  }
};
