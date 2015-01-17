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
    });
    
    return view;
});