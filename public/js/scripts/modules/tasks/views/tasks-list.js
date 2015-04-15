define(["text!templates/tasks/list.twig", "template"
	], function(Html, Template){

    return function(tasks){
        new Template(Html,{tasks:tasks},$('#js_tasks_list'));
    };
});