import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://api.fantasydata.net',
	namespace: 'soccer/v2/json/',
	headers: {
		'Ocp-Apim-Subscription-Key': '7004bf5fa61a48c1897e4212845ad3c3'
	},
	pathForType() {
		return 'BoxScoresByCompetition/mls/2017-06-17';
	}
});