import DS from 'ember-data';

export default DS.Model.extend({
   poll: function() {
      var _this = this;
      Ember.run.later( function() {
         _this.reload(); 
         _this.poll();
      }, 500);
   }.observes('matchs'),

	Game: DS.attr(''),
	AwayTeamCoach: DS.attr('string'),
	HomeTeamCoach: DS.attr('string'),
	Goals: DS.attr(),
	Bookings: DS.attr()
});
