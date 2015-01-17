define([
    'models/Pokemon',
], function (pokemon) {
    'use strict';
    var Pokemons = Backbone.Collection.extend({
        url: 'media/pokemons.json',
        model: pokemon,
        parse: function(data) {
            // console.log(data);
            return data;
        }
    });
    
    return new Pokemons();
});
