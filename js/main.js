$(document).ready(function(){
	var todos = new Todos([
		// new Todo({description: "first todo"}),
		// new Todo({description: "second todo"}),
		// new Todo({description: "third todo"})		
	])

	var todosView = new TodosView({model: todos})

	$("#container").append(todosView.render().$el);
})