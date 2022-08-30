'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeedsProperties', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
      feedId: {
        type: Sequelize.UUID,
        references: {
          model: 'Feeds',
          key: 'feedId'
        }
      },
      propertyId: {
        type: Sequelize.UUID,
        references: {
          model: 'Properties',
          key: 'propertyId'
        }
      }
    }, {
     // freezeTableName: true,
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FeedsProperties');
  }
};