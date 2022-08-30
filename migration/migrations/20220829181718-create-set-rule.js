'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SetRules', {
      setRuleId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      set_rule_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
     // freezeTableName: true,
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SetRules');
  }
};