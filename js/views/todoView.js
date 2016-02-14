var TodoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(options) {
		// if model didn't get passed it throws an error
		if (!(options && options.model)) {
			throw new Error("No model specified");
		}
		// refreshes the view so .toggleClass(below) gets updated
		this.model.on("change", this.render, this);
	},
	events: {
		"click .checkBox": "onClickCheckBox",
		"click #deleteBtn": "onClickDelBtn"
	},
	onClickCheckBox: function() {
		var count = parseInt($("#todoLeft").text())
			// toggles between true and false between todo completion. 
		if (this.model.get("isCompleted")) {
			this.model.set("isCompleted", false);
			$("#todoLeft").text(count + 1);
		} else {
			this.model.set("isCompleted", true);
			$("#todoLeft").text(count - 1);
		}
	},
	// removing a todo item
	onClickDelBtn: function() {
		var count = parseInt($("#todoLeft").text())
		this.remove();
		if (count != 0) {
			$("#todoLeft").text(count - 1);
		};
	},
	render: function() {

		this.$el.toggleClass("completed", this.model.get("isCompleted"));
		var template = _.template($("#todoTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});