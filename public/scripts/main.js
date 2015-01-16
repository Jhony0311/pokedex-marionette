/*global require*/
'use strict';

require.config({
    baseUrl: 'scripts/',
    paths: {
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette.min',
        wreqr: '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        babysitter: '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        handlebars: '../bower_components/handlebars.min',
        jquery: '../bower_components/jquery/dist/jquery',
        text: '../bower_components/text/text',
    },
    shim: {
        underscore: {
            exports: '_',
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore'],
        },
        marionette: {
            exports: 'Marionette',
            deps: ['backbone'],
        }
    },
    deps: ['jquery', 'underscore']
});

require([
    'app',
    'backbone',
    'routers/index',
    'controllers/index',
], function (app, Backbone, Router, Controller) {

    //Start app: excecute on start function
    app.start();

    //Initiate the router with the controller
    new Router({controller: Controller });

    // Backbone.history.start();
});
