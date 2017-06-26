import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
       getLatest: function() {
          Ember.Logger.log('Controller sending request for route refresh');
          this.send('reload');
       }
    }
});
