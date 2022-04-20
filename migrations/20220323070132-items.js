'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('items', 
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
        unit:{
          type:'SMALLINT',
          allowNull:true
        },
        sku:{ 
          type:'VARCHAR(65)',          
          allowNull: true

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
        deleted_at:{
          type: Sequelize.DATE,
          allowNull: true
        }



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
     await queryInterface.dropTable('items');
  }
};
