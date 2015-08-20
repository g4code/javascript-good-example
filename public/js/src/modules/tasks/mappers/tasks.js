define([
    "sandbox",
    "jsmapper/mapper"],
function(Sandbox, Mapper){

    var Notifications = function(adapter) {
        this.adapter = adapter;
    };

    Notifications.prototype = {

        resourceName: "/tasks/data.json",

        getIdentIdentifier: function(task)
        {
            return task.task_id;
        },

        updateCollection: function(task)
        {
            var tasks = this.get();

            for (i=0; i<tasks.length; i++) {
                if(tasks[i].task_id == task.task_id){
                    tasks[i] = task;
                }
            }

            this.post(tasks);
        }

    };

    Sandbox.extend(Notifications.prototype, new Mapper());

    return Notifications;
});