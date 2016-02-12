var Todo = Backbone.Model.extend({
	defaults: {
		isCompleted: false,
		todoCount: 0
	},
	validate: function(attrs){
		if (!attrs.description) {					// if no description is entered, return the message.
			return "No description entered!";
		}
	}
});