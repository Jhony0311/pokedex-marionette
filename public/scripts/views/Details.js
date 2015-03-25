define([
    'marionette',
    'handlebars',
    'text!templates/detailsSectionTemplate.hbs'
], function (Marionette, Handlebars, template) {
    'use strict';

    return Marionette.LayoutView.extend({
        className: 'row',
        template: Handlebars.compile(template),
        regions: {
            list: '#list',
            details: '#details'
        },
        onRender: function() {
            
        },
        onFilterSearch: function(collection) {
            console.log('filter');
        }
    });

});