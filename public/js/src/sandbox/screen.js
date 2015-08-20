;
define(function(){

    var screen = function(){};

    screen.prototype = {

        smallWidth: 803,

        mediumWith: 1280,

        isLarge: function()
        {
            return $(window).width() >= this.mediumWith;
        },

        isMedium: function()
        {
            return this.smallWidth <= $(window).width() &&
                $(window).width() < this.mediumWith;
        },

        isSmall: function()
        {
            return $(window).width() < this.smallWidth;
        },

        isLandscape: function(){
            return $(window).width() > $(window).height();
        },

        getContentHeight: function()
        {
            return $(window).height() - $("header").outerHeight();
        }

    };

    return new screen();
});