import Ember from 'ember';
import DS from 'ember-data'

var Unit = DS.Model.extend({
  property: DS.belongsTo('property'),
  users: DS.hasMany('user'),
  bedrooms: DS.attr(),
  bathrooms: DS.attr(),
  allowPets: DS.attr(),
  pool: DS.attr(),
  rent: DS.attr()
})

export default Unit;
