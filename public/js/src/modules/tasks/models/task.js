define([
    "sandbox",
    "evento",
	"modules/tasks/mappers/tasks",
    "modules/tasks/views/edit",],
function(Sandbox, Evento, TasksMapper, View){

	var Task = function(){};

	Task.prototype = {

        currentTask: function()
        {
            return {
                subject : Sandbox.dom.find("#js_subject").val(),
                text    : Sandbox.dom.find("#js_text").val(),
                task_id : Sandbox.dom.find("#js_task_id").val(),
                user:{
                    user_id:"1",
                    first_name:"John",
                    last_name:"Smith"
                }
            }
        },

		delete: function(taskId)
		{
			var confirmation = window.confirm("Are you sure?");
			if (confirmation == true) {
	            new TasksMapper("localCollection").remove(taskId);
                this.showTasksList();
	        }
		},

		edit: function(taskId)
		{
			var task = new TasksMapper("localCollection").getOneBy("task_id",taskId);
			new View(task);
		},

		insert: function(task)
		{
			var tasks = new TasksMapper("localCollection").get();
            task.task_id = Sandbox.time.now() + '';
            tasks.push(task);
            new TasksMapper("localCollection").post(tasks);
		},

		update: function(task)
		{
			new TasksMapper("localCollection").updateCollection(task);
		},

		showForm: function()
		{
			new View();
		},

		save: function(task)
		{
			task.task_id == "" ?
                this.insert(task):
                this.update(task);
			this.showTasksList();
		},

        showTasksList:function()
        {
            Sandbox.dom.find('#js_fader').hide();
            Sandbox.dom.find('#js_edit_container').html("");
            Evento.trigger("TASKS_LIST|SHOW");
        }
	};

	return Task;
});