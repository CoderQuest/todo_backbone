var Todo = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description) {					// if no description is entered, return the message.
			return "No description entered!";
		}
	}
});