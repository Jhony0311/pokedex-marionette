define([
    'marionette',
    'handlebars',
    'text!templates/ItemListTemplate.hbs',
], function (Marionette, Handlebars, template) {
    'use strict';
    
    var view = Marionette.ItemView.extend({
    	tagName: 'li',
    	className: 'element',
        template: Handlebars.compile(template),
        modelEvents: {
            'change:filter': 'onFilter',
        },
        onFilter: function() {
            console.log(this.get('name') + ' no visible');
        }
    });
    
    return view;
});