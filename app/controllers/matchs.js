import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
       getLatest: function() {
          Ember.Logger.log('Controller requesting route to refresh...');
          this.send('reload');
       }
    }
});

