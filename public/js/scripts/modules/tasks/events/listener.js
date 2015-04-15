define(["evento", "modules/tasks/models/task", "modules/tasks/models/show-tasks"
	], function(Evento, Task, ShowTasks){

    return function(){

		$("body").on( "click", ".js_task_edit", function(event) {
			event.preventDefault();
			new Task().edit($(event.currentTarget).data("task-id"));
		});

		$("body").on( "click", ".js_task_delete", function(event) {
			event.preventDefault();
			var confirmation = window.confirm("Are you sure?");
			if (confirmation == true) {
				new Task().delete($(event.currentTarget).data("task-id"));
			}
		});

		$("body").on( "click", "#js_add_task", function(event) {
			event.preventDefault();
			new Task().showForm();
		});

		$("body").on( "click", "#js_close", function() {
			$('#js_fader').hide();
			$('#js_edit_container').html("");
		});

		$("body").on( "click", "#js_save", function(event) {

			var task = {
				subject:$("#js_subject").val(),
				text:$("#js_text").val(),
				task_id:$("#js_task_id").val(),
				user:{
					user_id:"1",
					first_name:"John",
					last_name:"Smith"
				}
			};

			new Task().save(task);
		});

		Evento.on("TASKS_LIST|SHOW", function(){
			new ShowTasks();
		});

    };
});