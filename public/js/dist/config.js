;(function() {

    var config = {
        baseUrl: '/public/js/src',
        paths: {
            jquery: "../../bower/jquery/dist/jquery",
            templates:"../../templates",
            localstorage: "../../bower/localstorage.js/localstorage",
            http: "../../bower/g4.http.js/http",
            jsmapper: "../../bower/jsmapper/src",
            text: "../../bower/text/text",
            twig: "../../bower/twig.js/twig",
            evento: "../../bower/evento/lib/evento",
            template:"library/template"
        },
        shim: {

        }
    };

    if ((typeof module != 'undefined') && (module.exports)) { // Node Module
        module.exports = config;
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.SiteConfig = config;
    };
}).call(this);