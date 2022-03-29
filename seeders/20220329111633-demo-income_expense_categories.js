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

    await queryInterface.bulkInsert('income_expense_categories', [
    {
      name: 'SALARY',
      is_activated: true,
      type: 1,      
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'BUSINESS PAYMENT',
      is_activated: true,      
      type: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'FOOD',
      is_activated: true,
      type: 2,      
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'HOUSEHOLD',
      is_activated: true,
      type: 2,      
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'TRANSPORTATION',
      is_activated: true,
      type: 2,      
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
     await queryInterface.bulkDelete('income_expense', null, {});
     await queryInterface.bulkDelete('income_expense_categories', null, {});
  }
};
