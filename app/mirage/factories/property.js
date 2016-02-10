
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.list.random('Balboa Towers', 'Riva on the Park', 'The Albert', 'Linden'),
  address: faker.address.streetAddress,
  // units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}
});



// function randomUnit() {
//   console.info('I am being called');
//   return Math.floor((Math.random() * 100) + 1);
// };
