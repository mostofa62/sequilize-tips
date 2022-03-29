'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('income_expense_categories', 
    { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true

        },
        name:{ 
          type:'VARCHAR(100)',          
          allowNull: false

        },
        description:{
          type:'TEXT',
          allowNull: true

        },
        type:{
          type:'SMALLINT',  //1 means income, 2 means expense      
          allowNull:true
        },

        parent_id:{
          type:Sequelize.INTEGER, // child parent categories        
          allowNull:true
        },

        is_activated:{
          type:Sequelize.BOOLEAN,
          allowNull:false,
          defaultValue: false

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



    },
    {
      charset:'utf8mb4'
    }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('income_expense_categories');
  }
};
