define([
    "sandbox",
    "evento",
	"modules/tasks/mappers/tasks",
	"modules/tasks/models/show-tasks",
    "modules/tasks/models/task"
],function(Sandbox, Evento, TasksMapper, ShowTasks, Task){

    var Runner = function(){};

    Runner.prototype = {

        selectors: {
            add         : "#js_add_task",
            edit        : ".js_task_edit",
            remove      : ".js_task_delete",
            closeModal  : "#js_close",
            save        : "#js_save"
        },

        destroy: function()
        {

        },

        run: function()
        {
            this.listen();
            new ShowTasks();
            return this;
        },

        listen: function()
        {
            Sandbox.dom.onEvent("click", this.selectors.edit, function(event) {
                new Task().edit(Sandbox.dom.find(event.currentTarget).data("task-id"));
            });

            Sandbox.dom.onEvent("click", this.selectors.remove, function(event) {
                new Task().delete(Sandbox.dom.find(event.currentTarget).data("task-id"));
            });

            Sandbox.dom.onEvent( "click", this.selectors.add, function() {
                new Task().showForm();
            });

            Sandbox.dom.onEvent( "click", this.selectors.closeModal, function() {
                Sandbox.dom.find('#js_fader').hide();
                Sandbox.dom.find('#js_edit_container').html("");
            });

            Sandbox.dom.onEvent( "click", this.selectors.save, function() {
                new Task().save(new Task().currentTask());
            });

            Evento.on("TASKS_LIST|SHOW", function(){
                new ShowTasks();
            });

            return this;
        }

    };

    return Runner;

});