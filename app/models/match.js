import DS from 'ember-data';

export default DS.Model.extend({
	Game: DS.attr(''),
	AwayTeamCoach: DS.attr('string'),
	HomeTeamCoach: DS.attr('string'),
	Goals: DS.attr('')
});
