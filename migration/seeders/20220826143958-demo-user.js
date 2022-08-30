module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      userId : '9684118e-1db2-4c7d-b03b-c2e5a796ff6a',
      email: 'natilusky@gmail.com',
      password: 'top_secret'
    },
    {
      userId : '9684118e-1db2-489d-b03b-c2e5a796ff6a',
      email: 'liam@gmail.com',
      password: 'top_secret3'
    },
    {
      userId : '9684118e-1db2-965d-b03b-c2e5a796ff6a',
      email: 'israel@gmail.com',
      password: 'top_secret2'
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};