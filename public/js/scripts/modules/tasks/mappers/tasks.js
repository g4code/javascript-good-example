define(["jsmapper/mapper"], function(Mapper){

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

    $.extend(Notifications.prototype, new Mapper());

    return Notifications;
});