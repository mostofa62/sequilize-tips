'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('stocks', { 

      id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

      },
      item_id:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      quantity:{
        type:Sequelize.BIGINT,
        defaultValue:0,
        allowNull:false
      },
      op_type:{
        type:'SMALLINT',        
        allowNull:true
      },
      user_id:{
        type:Sequelize.INTEGER,        
        allowNull:true
      },
      created_at: {
          type: Sequelize.DATE, 
          //defaultValue: Sequelize.literal("now()"),
          allowNull: true
      },
      updated_at: {
          type: Sequelize.DATE,
          //defaultValue: Sequelize.literal("now()"),
          allowNull: true
      },


    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable('stocks');
  }
};
