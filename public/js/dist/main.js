;
require.config(SiteConfig);

require(["jquery", "modules/tasks/runner"], function($, Tasks) {

    $(function(){
        new Tasks();
    });
});