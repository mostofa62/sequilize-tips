'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('income_expense', 
    { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

        },
        t_id:{
          type: Sequelize.INTEGER, // accounts transaction ID
          allowNull: true
        },
        category_id:{
          type: Sequelize.INTEGER,
          allowNull: true
        },
        op_type:{
          type:'SMALLINT',  //1 means income, 2 means expense      
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
     await queryInterface.dropTable('income_expense');
  }
};
