define(["twig"], function(Twig){

    var Template = function(Html, data, context){
        var template = Twig.twig({data: Html});
        $(context).html(template.render(data));
    };

    return Template;
});