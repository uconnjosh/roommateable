import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    window._this = this;
  }
});
