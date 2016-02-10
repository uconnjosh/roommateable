import Ember from 'ember';
import DS from 'ember-data'

var Property = DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  units: DS.hasMany('unit', {polymorphic: true, async: true})
})

export default Property;
