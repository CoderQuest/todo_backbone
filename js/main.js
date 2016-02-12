$(document).ready(function() {
	var todos = new Todos();

	var todosView = new TodosView({
		model: todos
	});

	$("#container").append(todosView.render().$el);
})