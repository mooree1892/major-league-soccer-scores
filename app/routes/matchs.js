import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	reload: function() {
    		Ember.Logger.log('Route is now refreshing...');
      		this.refresh();
    	}
  	},	

	model() {
		return this.get('store').findAll('match');
		// var matches = this.get('store').findAll('match');
		// matches.reload();
		// return matches;
	}
});
