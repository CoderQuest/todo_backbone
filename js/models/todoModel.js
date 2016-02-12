var Todo = Backbone.Model.extend({
	defaults: {
		isCompleted: false,
		todoCount: 0
	},
	validate: function(attrs){
		// if no description is entered, return the message.
		if (!attrs.description) {					
			return "No description entered!";
		}
	}
});