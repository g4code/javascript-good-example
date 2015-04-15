define(["modules/tasks/mappers/tasks", "modules/tasks/views/tasks-list"
	],function(TasksMapper, View){

	var Tasks = function(){
		this.hasLocal() ?
			new View(new TasksMapper("localCollection").get()):
			this.getRemote();
	};

	Tasks.prototype = {

		getRemote: function()
		{
			new TasksMapper("remote").get($.proxy(this.onRemoteGet, this));
		},

		onRemoteGet: function(data)
		{
			new TasksMapper("localCollection").post(data);
			new View(new TasksMapper("localCollection").get());
		},

		hasLocal: function()
		{
			return new TasksMapper("localCollection").get() != null;
		}

	};

	return Tasks;

});