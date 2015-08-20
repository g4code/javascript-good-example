;
define([
    'sandbox/template',
    "sandbox/screen"],
function(Template, Screen){

    var Sandbox = {

        template: function(Html, data, context)
        {
            return new Template(Html, data, context);
        },

        screen: function()
        {
            return Screen;
        },

        dom:{
            find: function(selector)
            {
                return $(selector);
            },

            onEvent: function(event, selector, callback)
            {
                $("body").on( event, selector, callback);
            }
        },

        time:{
            now:function()
            {
                return $.now();
            }
        },

        extend: function(obj1, obj2)
        {
            return $.extend(obj1, obj2);
        },

        proxy: function()
        {
           // todo
        }
    };

    return Sandbox;

});