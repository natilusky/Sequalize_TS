'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rules', {
      ruleId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      },
      setRuleId: {
        type: Sequelize.UUID,
        references: {
          model: 'SetRules',
          key: 'setRuleId'
        }
      },
      scope: {
        allowNull: false,
        type: Sequelize.STRING
      },
      operator: {
        allowNull: false,
        type: Sequelize.STRING
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING
      },
      and_or: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    }, {
     // freezeTableName: true,
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rules');
  }
};