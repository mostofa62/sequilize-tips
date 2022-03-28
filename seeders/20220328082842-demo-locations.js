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

    await queryInterface.bulkInsert('locations', [
    {
      name: 'STORE',
      order_by:1, //KG
      code:'STORE001',
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'OUTLET',
      order_by:2, //KG
      code:'STORE002',
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      name: 'WAREHOUSE',      
      order_by:3, //PIECES
      code:'WAREHOUSE001',
      created_at: new Date(),
      updated_at: new Date()
    },    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('locations', null, {});
  }
};
