var TodoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(options) {
		if (!(options && options.model)) { // if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
		this.model.on("change", this.render, this);  // refreshes the view so .toggleClass(below) gets updated
	},
	events: {
		"click #checkBox": "onClickCheckBox"
	},
	onClickCheckBox: function() {
		if (this.model.get("isCompleted")) {				// toggles between true and false between todo completion. 
			this.model.set("isCompleted", false);
			console.log(this.model.get("isCompleted"))
		} else {
			this.model.set("isCompleted", true)
			console.log(this.model.get("isCompleted"))
		}
	},

	render: function() {
		
		this.$el.toggleClass("completed", this.model.get("isCompleted"));
		var checked = this.model.get('isCompleted') ? "checked" : "";					// fixes the change event(above) refresh issue so that the box is checked when isCompleted = true and vice versa. 
		// var checked = this.model.get("isCompleted") ? "checked" : "";
		this.$el.html("<input type='checkbox' id='checkBox' " + checked + "></input> " + this.model.get("description"));
		return this;
	}
});