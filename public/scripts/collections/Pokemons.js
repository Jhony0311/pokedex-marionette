define([
    'models/Pokemon',
], function (pokemon) {
    'use strict';
    var Pokemons = Backbone.Collection.extend({
        url: 'http://pokeapi.co/api/v1/pokedex/1/',
        model: pokemon,
        parse: function(data) {
        	return data.pokemon;
        }
    });
    
    return Pokemons;
});
