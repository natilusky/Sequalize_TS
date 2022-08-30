module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feeds', [
      {
        feedId: 'ad1cbb50-4191-445c-891f-522c881e1028',
        feed_name: 'FIDS_Depatures',
        UserUserId: '9684118e-1db2-4c7d-b03b-c2e5a796ff6a',
      },
      {
        feedId: '224a0981-718b-4f3a-b4c9-15cc21503b92',
        feed_name: 'Stocks',
        UserUserId: '9684118e-1db2-4c7d-b03b-c2e5a796ff6a',
      },
      {
        feedId: 'da9781c2-32ce-4acb-8229-187432ea17ed',
        feed_name: 'Dashboard',
        UserUserId: '9684118e-1db2-4c7d-b03b-c2e5a796ff6a',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feeds', null, {});
  }
};