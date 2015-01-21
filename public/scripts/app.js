define([
    'marionette',
    'collections/Pokemons',
    'views/MainLayout',
], function (Marionette, Pokemons, MainLayout) {
    'use strict';
    // console.log(Pokemons);

    var app = new Marionette.Application();
    var mainView;

    app.addInitializer(function() {
        Pokemons.fetch({remove: false});
        app.vent.on('showDetails', function(model) {
            console.log(model);
        });
    });

    app.on('start', function(){
        if(Backbone.history) {
            Backbone.history.start();
        }

        mainView = new MainLayout().render();

    });
    
    return window.app = app;
});