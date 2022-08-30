module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SetRules', [
      {
        setRuleId: 'c5d298ab-9030-4dc7-981a-689b9d98f2bb',
        set_rule_name: 'Hot Cofee Promo'
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SetRules', null, {});
  }
};