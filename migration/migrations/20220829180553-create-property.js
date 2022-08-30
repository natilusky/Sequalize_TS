'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      propertyId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      property_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      property_type: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
     // freezeTableName: true,
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  }
};