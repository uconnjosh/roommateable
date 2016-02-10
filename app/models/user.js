import Ember from 'ember';
import DS from 'ember-data'

var User = DS.Model.extend({
  name: DS.attr(),
  bio: DS.attr(),
  units: DS.hasMany('unit', {polymorphic: true, async: true})
})

export default User;
