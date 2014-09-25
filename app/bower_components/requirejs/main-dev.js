//main-dev.js
 
requirejs.config({
 
    baseUrl: './',
 
    paths: {
        app: 'js/app',
        jquery: "bower_components/jquery/dist/jquery",
        angular: "bower_components/angular/angular",
        "angular-resource": "bower_components/angular-resource/angular-resource",
        "angular-route": "bower_components/angular-route/angular-route",
        controllers: "js/controllers/",
        services: "js/services/",
        filters: "js/filters/"
    },
    shim: {
        "angular": {
            deps: ["jquery"],
            exports: "angular"
        },
        "angular-route": {
            deps: ["angular"]
        }
    }
});
 
requirejs([
    "app"
]);