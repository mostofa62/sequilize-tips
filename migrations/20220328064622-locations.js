'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('locations', 
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
        code:{ 
          type:'VARCHAR(40)',          
          allowNull: true

        },
        order_by:{
          type:'SMALLINT',
          allowNull:false,
          unique: true
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
     await queryInterface.dropTable('locations');
  }
};
