// export default function(server) {
var scenario = function(server) {
  window.scen = server;

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  var prop1 = server.create('property', {name: 'Balboa Towers', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop2 = server.create('property', {name: 'Riva on the Park', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop3 = server.create('property', {name: 'The Albert', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop4 = server.create('property', {name: 'Chestnut Hill', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop5 = server.create('property', {name: 'The Emory', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop6 = server.create('property', {name: 'Linden', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop7 = server.create('property', {name: 'Portland Plaza', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  var prop8 = server.create('property', {name: 'Goose Hollow Apartments', units: {'data':[{'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}, {'id': randomUnit(), 'type': 'units'}]}})
  // var unit = server.create('unit', {property: prop1});
  
  server.createList('unit', 100)
  server.createList('user', 100, {units: {'data':[{'id': randomUnit()}]}});
  // server.createList('property', 5);
}


function randomUnit() {
  console.info('I am being called');
  return Math.floor((Math.random() * 100) + 1);
};

export default scenario;
