import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	scrollingDow: function() {
  	  console.info('you have reached a scroll down point');
  	},
  	scrollingDow2: function() {
  	  console.info('you have reached a scroll down point22222');
  	},
  	scrollingUp: function() {
  	  console.info('you are scrolling up');
  	},
  	scrollingUp2: function() {
  	  console.info('you are scrolling up22222');
  	},
  	viewedScrollingUp: function() {
  	  console.info('you are scrolling up');
  	}
  }
});
