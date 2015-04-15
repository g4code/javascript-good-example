define(["evento"], function(Evento){

    var Events = function(){};

    Events.prototype = {

        showTasksList:function()
        {
            $('#js_fader').hide();
            $('#js_edit_container').html("");
            Evento.trigger("TASKS_LIST|SHOW");
        }

    };

    return Events;
})