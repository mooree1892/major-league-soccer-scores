import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	reload: function() {
    		Ember.Logger.log('Refreshing route');
      		this.refresh();
    	}
  	},	

	model() {
		return this.get('store').findAll('match');
	}
});
