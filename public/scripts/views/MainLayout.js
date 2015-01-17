define([
    'marionette',
    'views/List',
    // 'views/Details',
    'collections/Pokemons',
    'text!templates/layoutTemplate.hbs'
], function (Marionette, ListView, Pokemons, template) {
    'use strict';

    return Marionette.LayoutView.extend({
        el: '.content',
        template: template,
        regions: {
            list: '#list',
            details: '#details'
        },
        onRender: function() {
            // console.log('suppouse to show region views');
            this.getRegion('list').show(new ListView({
                collection: Pokemons
            }));
        }
    });

});