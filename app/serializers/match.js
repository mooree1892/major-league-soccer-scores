import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		var result = [];
		payload.forEach(function(element, index){
            element['id'] = index;
            result.push(element);
        });
        result = { matchs : result };

        if (result.length == 0) {
        	var noGame = "No Games Today";
        	return this._super(store, primaryModelClass, noGame, id, requestType);
        }
        else {
        	return this._super(store, primaryModelClass, result, id, requestType);
        }
    }
});
