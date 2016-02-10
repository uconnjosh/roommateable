import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users');
    this.resource('user', {
      path: '/users/:user_id'
    });

  this.resource('properties');
    this.resource('property', {
      path: '/properties/:property_id'
    })
});

export default Router;


// import Ember from 'ember';
// import config from './config/environment';

// var Router = Ember.Router.extend({
//   // rootURL: window.location.pathname,
//   rootURL: '/cli/ep/',
//   location: config.locationType
// });

// Router.map(function() {
//   this.resource('activities');
//     this.resource('activity', {
//       path: '/activities/:activity_id'
//   });
//   this.resource('user-activities', {
//     path: '/users/:user_id/activities'
//   });
//   this.resource('user-activity', {
//     path: '/users/:user_id/activities/:activity_id'
//   });
//   this.resource('help', {
//     path: 'help'
//   });
//   this.resource('messages', {
//     path: 'messages'
//   }, function() {
//     this.route('show', {
//       path: '/:message_id'
//     });
//     this.route('inbox', {
//       path: '/inbox'
//     });
//     this.route('outbox', {
//       path: '/outbox'
//     });
//     return this.route('new', {
//       path: '/new'
//     });
//   });
//   this.resource('settings', {
//     path: 'settings'
//   });
//   this.resource('todos');
//   this.resource('response', {
//     path: '/responses/:response_id'
//   });
//   return this.resource('marker', {
//     path: '/marker/:activity_id'
//   });
// });


// Router.reopen({
//   init: function(){
//     this.set('rootURL', window.location.pathname);
//     this._super();
//   },
//   activate: function() {
//     this.alerts.clear();
//   }
// });

// // Router.reopen({
// //   recaulculateSidebarHeight: function() {
// //     var that = this;
// //     setTimeout(function(){
// //       that.ui.set('shouldRecalculateHeight', true);
// //     }, 250);
// //   }.on('didTransition')
// // });

// // Router.reopen({
// //   location: 'hashbang'
// // });

// export default Router;
