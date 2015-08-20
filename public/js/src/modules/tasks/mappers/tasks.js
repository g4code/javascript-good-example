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
        }

    };

    Sandbox.extend(Notifications.prototype, new Mapper());

    return Notifications;
});