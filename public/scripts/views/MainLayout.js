define([
    'marionette',
    'handlebars',
    'views/List',
    'views/Details',
    'collections/Pokemons',
    'text!templates/layoutTemplate.hbs'
], function (Marionette, Handlebars, ListView, DetailsView, Pokemons, template) {
    'use strict';

    return Marionette.LayoutView.extend({
        el: '.content',
        template: Handlebars.compile(template),
        regions: {
            list: '#list',
            details: '#details'
        },
        onRender: function() {
            this.getRegion('list').show(new ListView({
                collection: Pokemons
            }));

            this.getRegion('details').show(new DetailsView({
                collection: Pokemons
            }));
        },
        onFilterSearch: function(collection) {
            console.log('filter');
        }
    });

});