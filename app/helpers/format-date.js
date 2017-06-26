import Ember from 'ember';
import moment from 'moment';

export function formatDate(params/*, hash*/) {
	var date = new Date(params);
	var newDate = moment(date).subtract(4, 'h').format('MMMM Do YYYY, h:mm a');
	// Ember.Logger.log(date);
	// Ember.Logger.log(newDate);

	// newDate = moment().format(date);
	// Ember.Logger.log(newDate);

  return `${newDate}`;
}

export default Ember.Helper.helper(formatDate);
