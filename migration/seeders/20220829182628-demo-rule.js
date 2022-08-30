module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rules', [
      {
        ruleId: 'e81f883f-35e1-44e9-82d4-7569df1d36cc',
        FeedFeedId: 'ad1cbb50-4191-445c-891f-522c881e1028',
        PropertyPropertyId: '54ea328e-9e0d-4647-97dd-5cd7bc6eeda2',
        SetRuleSetRuleId: 'c5d298ab-9030-4dc7-981a-689b9d98f2bb',
        scope: 'All',
        operator: '>',
        value: 'Rain',
        and_or : true
      },
      {
        ruleId: 'b147981b-d4e4-49d7-b0de-07d19981d956',
        FeedFeedId: '224a0981-718b-4f3a-b4c9-15cc21503b92',
        PropertyPropertyId: '033ed333-fa26-4677-9244-cb79745b48b3',
        SetRuleSetRuleId: 'c5d298ab-9030-4dc7-981a-689b9d98f2bb',
        scope: 'All',
        operator: '=',
        value: '5',
        and_or : true
      },
      {
        ruleId: 'e116f860-54b7-4a49-a588-02e7cf2c81d1',
        FeedFeedId: 'da9781c2-32ce-4acb-8229-187432ea17ed',
        PropertyPropertyId: 'd7f5ff29-446b-4aa8-8c66-795e1205320b',
        SetRuleSetRuleId: 'c5d298ab-9030-4dc7-981a-689b9d98f2bb',
        scope: 'All',
        operator: '>',
        value: '60',
        and_or : true
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rules', null, {});
  }
};