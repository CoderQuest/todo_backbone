var TodoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(options) {
		if (!(options && options.model)) { // if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
		this.model.on("change", this.render, this); // refreshes the view so .toggleClass(below) gets updated
	},
	events: {
		"click .checkBox": "onClickCheckBox"
	},
	OnClickCount: function() {
		console.log("click")
	},
	onClickCheckBox: function() {
		var count = parseInt($("#todoLeft").text())
		if (this.model.get("isCompleted")) { // toggles between true and false between todo completion. 
			this.model.set("isCompleted", false);
			$("#todoLeft").text(count + 1);
		} else {
			this.model.set("isCompleted", true);
			$("#todoLeft").text(count - 1);
		}
	},

	render: function() {

		this.$el.toggleClass("completed", this.model.get("isCompleted"));
		var template = _.template($("#todoTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		// this.$el.html("<div>Items left: <span id='todoLeft'> 0 </span> </div> <div>Mark all as complete</div>")

		return this;
	}
});