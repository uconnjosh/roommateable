import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    window.that = this;
    controller.set('properties', this.store.findAll('property'));
  }
});
