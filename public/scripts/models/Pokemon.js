define([
    'backbone',
    'underscore',
], function (Backbone, _) {
    'use strict';

    var pokemon = Backbone.Model.extend({
        defaults: {
            abilities: [],
            attack: 0,
            defense: 0,
            descriptions: [],
            description: "",
            evolutions: [],
            happiness: 0,
            height: "",
            hp: 0,
            name: "Pokemon",
            pkdx_id: 0,
            sp_atk: 0,
            sp_def: 0,
            speed: 0,
            sprites: [],
            sprite: "",
            types: [],
            weight: "",
        },
        getSprite: function() {
            
        },
        getDescription: function() {

        },
        parse: function(data) {
            console.log(data);
            return data;
        }
    });

    return pokemon;
    
});