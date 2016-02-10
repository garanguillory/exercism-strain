var strain = {

	keep: function(list,predicate){
		var storage = [];
			list.map(function(element){
				 if(predicate(element)){
				 		storage.push(element)
				 }
			});
		return storage;
	},

	discard: function(list,predicate){
		var storage = [];
			list.map(function(element){
				if(!predicate(element)){
					storage.push(element);
				}
			});
		return storage;
	}

};


module.exports = strain;