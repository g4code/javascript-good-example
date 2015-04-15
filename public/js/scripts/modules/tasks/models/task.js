define(["modules/tasks/mappers/tasks", "modules/tasks/views/edit", "modules/tasks/events/trigger"
	],function(TasksMapper, View, EventsTrigger){

	var Task = function(){};

	Task.prototype = {

		delete: function(taskId)
		{
            new TasksMapper("localCollection").delete({task_id:taskId});
            new TasksMapper("remote").delete({task_id:taskId});
            new EventsTrigger().showTasksList();
		},

		edit: function(taskId)
		{
			var task = new TasksMapper("localCollection").getOneBy("task_id",taskId);
			new View(task);
		},

		insert: function(task)
		{
			var tasks = new TasksMapper("localCollection").get();
            task.task_id = $.now();
            tasks.push(task);
            new TasksMapper("localCollection").post(tasks, function(response){
            //TODO
        	});
		},

		showForm: function()
		{
			new View();
		},

		save: function(task)
		{
			task.task_id == "" ?
                this.insert(task):
                new TasksMapper("localCollection").put(task, {task_id:task.task_id});
			new TasksMapper("remote").put(task,function(response){
            //TODO
        	});
			new EventsTrigger().showTasksList();
		}
	};

	return Task;
});