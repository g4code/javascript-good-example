define([
    "text!templates/tasks/edit.twig",
    "sandbox"],
function(Html, Sandbox){

    return function(task){
        Sandbox.dom.find('#js_fader').show();
        Sandbox.template(Html,{task:task}, Sandbox.dom.find('#js_edit_container'));
    };
});