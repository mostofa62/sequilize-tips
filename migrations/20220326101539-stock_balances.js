'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('stock_balances', { 
      
      item_id:{
        type: Sequelize.INTEGER,
        //primaryKey: true,        
        allowNull: false
      },
      location_id:{
        type: Sequelize.INTEGER,
        //primaryKey: true,
        allowNull: false
      },
      balance_quantity:{
        type:Sequelize.BIGINT,
        defaultValue:0,
        allowNull:false
      },
      op_type:{
        type:'SMALLINT',        
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


      },{

        primaryKey:{
          item_location:{
            fields: ['item_id', 'location_id']
          }
        }

      });

    await queryInterface.addConstraint('stock_balances',{ 
      fields:['item_id', 'location_id'], 
      type: 'primary key',
      name: 'item_location'
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('stock_balances', 'item_location');     
     await queryInterface.dropTable('stock_balances');     

  }
};
