import Ember from 'ember'

export default Ember.Component.extend({
  showDetails: false,
  actions: {
    toggleDetails: function(building) {
  	  // building.get('units');
  	  this.toggleProperty('showDetails');
  	}
  }
});
