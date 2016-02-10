
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  bedrooms: faker.list.random(0, 1, 2, 3, 4, 5),
  bathrooms: faker.list.random(1, 2, 3, 4, 5),
  'allow-pets': faker.list.random(true, false),
  pool: faker.list.random(true, false),
  rent: faker.list.random(250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600)
  // rent: faker.finance.amount(500, 5000, 2)
});
