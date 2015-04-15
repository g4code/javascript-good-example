define(["text!templates/tasks/edit.twig", "template"
	], function(Html, Template){

    return function(task){
    	$('#js_fader').show();
        new Template(Html,{task:task},$('#js_edit_container'));
    };
});