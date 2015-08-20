define([
    "text!templates/tasks/list.twig",
    "sandbox"],
function(Html, Sandbox){

    return function(tasks){
        Sandbox.template(Html,{tasks:tasks},Sandbox.dom.find('#js_tasks_list'));
    };
});