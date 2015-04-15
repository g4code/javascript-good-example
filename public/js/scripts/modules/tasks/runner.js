define(["modules/tasks/mappers/tasks", "modules/tasks/events/listener", "modules/tasks/models/show-tasks"
	],function(TasksMapper, Events, ShowTasks){

	return function(){
		new Events();
		new ShowTasks();
	};

});