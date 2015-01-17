define([
    'marionette',
    'text!templates/ItemListTemplate.hbs',
], function (Marionette, template) {
    'use strict';
    
    var view = Marionette.ItemView.extend({
    	// el: 'ul',
        template: template
    });
    
    return view;
});