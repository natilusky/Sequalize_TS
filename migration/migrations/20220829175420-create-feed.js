'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feeds', {
      feedId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'userId'
        }
      },
      feed_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
    //  freezeTableName: true,
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Feeds');
  }
};