var Todo = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},
	validate: function(attrs){
		if (!attrs.description) {					// if no description is entered, return the message.
			return "No description entered!";
		}
	}
});