import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		var result = [];
		payload.forEach(function(element, index){
            element['id'] = index;
            result.push(element);
        });
        result = { matchs : result };

        return this._super(store, primaryModelClass, result, id, requestType);
    }
});
