module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [
      {
        propertyId: '033ed333-fa26-4677-9244-cb79745b48b3',
        property_name: 'Airline',
        property_type: 'String'
      },
      {
        propertyId: '54ea328e-9e0d-4647-97dd-5cd7bc6eeda2',
        property_name: 'Time',
        property_type: 'Date'
      },
      {
        propertyId: 'd7f5ff29-446b-4aa8-8c66-795e1205320b',
        property_name: 'Destination',
        property_type: 'String'
      },
      {
        propertyId: '920bd339-436a-4c34-b327-82819e731f67',
        property_name: 'Gate',
        property_type: 'Integer'
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};