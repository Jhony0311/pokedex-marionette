define([
    'marionette',
    'collections/Pokemons',
    // 'views/MainLayout',
    // 'views/List',
    // 'views/Details',
], function (Marionette, Pokemons) {
    'use strict';
    var pokemons = new Pokemons();

    var app = new Marionette.Application();

    app.addInitializer(function(){
        pokemons.fetch();
    });
    
});