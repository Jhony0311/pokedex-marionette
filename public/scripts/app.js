define([
    'marionette',
    'collections/Pokemons',
    'views/MainLayout',
    // 'views/List',
    // 'views/Details',
], function (Marionette, Pokemons, MainLayout) {
    'use strict';
    // console.log(Pokemons);
    var pokemons = new Pokemons();

    var app = new Marionette.Application();

    app.addInitializer(function(){
        pokemons.fetch();
    });

    app.on('start', function(){
        if(Backbone.history) {
            Backbone.history.start();
        }

        new MainLayout().render();

    });
    
    return window.app = app;
});