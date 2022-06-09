'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('account_balances', { 
      
      account_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true
      },      
      balance_amount:{
        type:Sequelize.FLOAT(10, 2),
        defaultValue:0,
        allowNull:false
      },
      method:{
        type:'SMALLINT', // purchase/sales/income/expense       
        allowNull:true
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
     await queryInterface.dropTable('account_balances');
  }
};
