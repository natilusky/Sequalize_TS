module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FeedsProperties', [
      {
        FeedFeedId: 'ad1cbb50-4191-445c-891f-522c881e1028',
        PropertyPropertyId: '033ed333-fa26-4677-9244-cb79745b48b3'
      },
      {
        FeedFeedId: '224a0981-718b-4f3a-b4c9-15cc21503b92',
        PropertyPropertyId: '033ed333-fa26-4677-9244-cb79745b48b3'
      },
      {
        FeedFeedId: '224a0981-718b-4f3a-b4c9-15cc21503b92',
        PropertyPropertyId: 'd7f5ff29-446b-4aa8-8c66-795e1205320b'
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FeedsProperties', null, {});
  }
};